import { useState } from "react";
import getConfig from "next/config";
import { NFTStorage } from "nft.storage";
import { Configuration, OpenAIApi } from "openai";
import { useMessages } from "~~/contexts/Messages";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const { publicRuntimeConfig } = getConfig();

interface ImageResponse {
  data: ImageData[];
}

interface ImageData {
  url: string;
}

export const Mint = () => {
  const { state, dispatch } = useMessages();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const apiKey = publicRuntimeConfig.OPENAI_API_KEY;
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

  // second, we need to get the image for our NFT, which we can generate from the conversation itself
  async function generateImage() {
    const configuration = new Configuration({
      apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    openai
      .createImage({
        prompt: conversation.slice(0, 1000), //limited to the beginning so that OpenAI doesn't freak out
        n: 1,
        size: "512x512",
      })
      .then(response => {
        const responseData = response.data as ImageResponse;
        setImageUrl(responseData.data[0].url);
      })
      .catch((error: any) => {
        console.log(error);
      });

    const r = await fetch(imageUrl);
    if (!r.ok) {
      throw new Error("error fetching image");
    }
    return r.blob();
  }

  // third, we need to store the conversation in IPFS
  const storeNFT = async () => {
    setLoading(true);
    const image = await generateImage();
    const nft = {
      image,
      name: "Sati AI Conversation",
      description: "A mindful meditation made meaningful by your participation and presence",
      properties: {
        content: {
          "text/markdown": conversation,
        },
      },
    };

    const client = new NFTStorage({
      token: token,
    });
    const metadata = await client.store(nft);

    console.log("NFT data stored!");
    console.log("Metadata URI: ", metadata.url);
    dispatch({ type: "SET_METADATA", payload: metadata.url });
    await writeAsync();
    setLoading(false);
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
      <button
        className={`btn btn-primary px-10 rounded-full space-x-3 ${
          loading ? "loading before:!w-4 before:!h-4 before:!mx-0" : ""
        }`}
        onClick={storeNFT}
      >
        {loading ? "" : "Memorialise"}
      </button>
    </div>
  );
};
