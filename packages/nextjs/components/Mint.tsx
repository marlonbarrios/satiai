import { useState } from "react";
import getConfig from "next/config";
import { NFTStorage } from "nft.storage";
import { useAccount } from "wagmi";
import { useMessages } from "~~/contexts/Messages";
import { useAccountBalance } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const { publicRuntimeConfig } = getConfig();

export const Mint = () => {
  const { address } = useAccount();
  const { balance } = useAccountBalance(address);
  const { state, dispatch } = useMessages();
  const [loading, setLoading] = useState(false);
  const [stored, setStored] = useState(false);

  const token = publicRuntimeConfig.NFT_STORAGE_KEY;
  // first, we need to clean up the conversation so it is stored in a readable and delightful form
  // we use three new lines to separate calls and responses as Sati sometimes uses \n\n itself.
  const conversation = state.messages
    .map(message => {
      if (message.role === "assistant") {
        return `Sati AI: ${message.content}`;
      } else if (message.role === "user") {
        return `You: ${message.content}`;
      }
      return "";
    })
    .join("\n\n\n");

  // second, we need to store the conversation in IPFS
  const storeNFT = async () => {
    setLoading(true);
    try {
      const randomImageNumber = Math.floor(Math.random() * 15);
      const imageUrl = `${window.location.origin}/assets/nfts/${randomImageNumber}.png`;
      const r = await fetch(imageUrl);
      if (!r.ok) {
        throw new Error("Error fetching image");
      }
      const image = await r.blob();

      const nft = {
        image: image,
        name: "Re:membering Conversation",
        description:
          "This NFT re-members a conversation with https://sati-ai.app. It went something like this:\n\n" +
          conversation,
        properties: {
          image: {
            "image/png": imageUrl,
          },
        },
      };

      const client = new NFTStorage({
        token: token,
      });
      const metadata = await client.store(nft);
      console.log(metadata.url);
      dispatch({ type: "SET_METADATA", payload: metadata.url });
      setStored(true);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // now, we can mint a new NFT with the IPFS hash
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "SatiConversations",
    functionName: "converse",
    args: [state.metadata],
    value: "0.01",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className="px-5 text-center">
      <hr />
      <p className="mt-10">There are two steps to memorialising this conversation.</p>
      {stored ? (
        <div>
          <p>Now, mint it as an NFT:</p>
          <button
            className={`btn btn-primary px-10 rounded-full space-x-3 ${
              loading ? "loading before:!w-4 before:!h-4 before:!mx-0" : ""
            }`}
            onClick={writeAsync}
          >
            {loading ? "" : "Mint"}
          </button>
        </div>
      ) : balance && balance > 0.01 ? (
        <div>
          <p>First, write it to permanent storage:</p>
          <button
            className={`btn btn-primary px-10 rounded-full space-x-3 ${
              loading ? "loading before:!w-4 before:!h-4 before:!mx-0" : ""
            }`}
            onClick={storeNFT}
          >
            {loading ? "" : "Memorialise"}
          </button>
        </div>
      ) : (
        <p>First, though, you need to connect a wallet with 0.01 ETH.</p>
      )}
    </div>
  );
};
