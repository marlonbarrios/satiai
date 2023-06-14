import { useMessages } from "~~/contexts/Messages";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

export const Mint = () => {
  const { state } = useMessages();
  const conversation = state.messages.map(message => message.content).join(" ");
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "SatiConversations",
    functionName: "converse",
    args: [conversation],
    value: "0.005",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  return (
    <button className="btn btn-primary" onClick={writeAsync}>
      Mint
    </button>
  );
};
