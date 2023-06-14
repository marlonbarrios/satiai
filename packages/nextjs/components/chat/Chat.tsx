import { useEffect, useState } from "react";
import Button from "../Button";
import { type ChatGPTMessage, ChatLine, LoadingChatLine } from "./ChatLine";
import { useCookies } from "react-cookie";
import { useMessages } from "~~/contexts/Messages";

const COOKIE_NAME = "sati-ai";

const InputMessage = ({ input, setInput, sendMessage }: any) => (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 ml-8 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
      value={input}
      onKeyDown={e => {
        if (e.key === "Enter") {
          sendMessage(input);
          setInput("");
        }
      }}
      onChange={e => {
        setInput(e.target.value);
      }}
    />
    <Button
      type="submit"
      className="ml-4 flex-none"
      onClick={() => {
        sendMessage(input);
        setInput("");
      }}
    >
      Say
    </Button>
  </div>
);

export function Chat() {
  const { state, dispatch } = useMessages();
  const [input, setInput] = useState("");
  const [cookie, setCookie] = useCookies([COOKIE_NAME]);

  useEffect(() => {
    if (!cookie[COOKIE_NAME]) {
      // generate a semi random short id
      const randomId = Math.random().toString(36).substring(7);
      setCookie(COOKIE_NAME, randomId);
    }
  }, [cookie, setCookie]);

  const sendMessage = async (message: string) => {
    dispatch({ type: "SET_LOADING", payload: true });

    const newMessages: ChatGPTMessage[] = [...state.messages, { role: "user", content: message }];

    dispatch({ type: "SET_MESSAGES", payload: newMessages });

    const last10messages = newMessages.slice(-10);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: last10messages,
        user: cookie[COOKIE_NAME],
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.text();

    const newMessage: ChatGPTMessage = { role: "assistant", content: data };

    dispatch({
      type: "SET_MESSAGES",
      payload: [...newMessages, newMessage],
    });

    dispatch({ type: "SET_LOADING", payload: false });
  };

  return (
    <div className="rounded-2xl border-zinc-400 mb-4 lg:border lg:p-6">
      {state.messages.map(({ content, role }, index) => (
        <ChatLine key={index} role={role} content={content} />
      ))}

      {state.loading && <LoadingChatLine />}

      {state.messages.length < 2 && (
        <span className="mx-auto flex flex-grow clear-both">
          Type a message in your preferred language to start the conversation...
        </span>
      )}
      <InputMessage input={input} setInput={setInput} sendMessage={sendMessage} />
    </div>
  );
}
