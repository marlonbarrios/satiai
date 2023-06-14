import { NFTStorage } from "nft.storage";
import { useMessages } from "~~/contexts/Messages";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const Mint = () => {
  const { state, dispatch } = useMessages();
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

  // second, we need to get the image for our NFT, which will always be the same
  async function getImage() {
    const imageOriginUrl = "https://www.sati-ai.app/_next/image?url=%2Fimages%2Flogo.png&w=128&q=75";
    const r = await fetch(imageOriginUrl);
    if (!r.ok) {
      throw new Error("error fetching image");
    }
    return r.blob();
  }

  // third, we need to store the conversation in IPFS
  const storeNFT = async () => {
    const nft = {
      image: await getImage(),
      name: "Sati AI Conversation",
      description: "A mindful meditation made meaningful by your participation and presence",
      properties: {
        content: {
          "text/markdown": conversation,
        },
      },
    };

    const client = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2MDJlZTcyRTM2ODBmMDVhNDIwNGRhOWVkYTAyRTBEOWYzMjQyM0QiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NTcxMjU3MzQ3NywibmFtZSI6IkFldGhlciwgRWFydGgsICYgQXJ0In0.jMHzKv6UAWNiaQRFV32DEgtoijkeigt7WSTJIMtx41A",
    });
    const metadata = await client.store(nft);

    console.log("NFT data stored!");
    console.log("Metadata URI: ", metadata.url);
    dispatch({ type: "SET_METADATA", payload: metadata.url });
    writeAsync();
  };

  // now, we can mint a new NFT with the IPFS hash
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "SatiConversations",
    functionName: "converse",
    args: [state.metadata],
    value: "0.005",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <div className="text-center">
      <button className="btn btn-primary px-10" onClick={storeNFT}>
        Memorialise
      </button>
    </div>
  );
};
