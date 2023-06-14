import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Forgive from "../components/examples/Forgive";
import Queerness from "../components/examples/Queerness";
import Sabiduria from "../components/examples/Sabiduria";
import Thickpresent from "../components/examples/Thickpresent";
import type { NextPage } from "next";
import { BugAntIcon, MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { Mint } from "~~/components/Mint";
import { Chat } from "~~/components/chat/Chat";

const Home: NextPage = () => {
  const [activeComponent, setActiveComponent] = useState("");
  const handleClick = (component: string) => {
    setActiveComponent(component);
  };
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 md:w-1/2">
          <div className="float-left">
            <h1 className="text-center mb-8 mr-10">
              <span className="block text-4xl font-bold">Sati-Ai</span>
            </h1>
          </div>
          <div className="float-right">
            <Image src="/logo.png" alt="Sati-AI" width={100} height={100} />
          </div>
        </div>

        <div className="px-5 md:w-1/2">
          <p className="text-lg">
            Sati-AI is a multi-lingual AI-powered mindfulness meditation assistant and consultant that incorporates
            interdisciplinary connections with contemporary knowledge, such as embodied cognition and enactivism,
            trauma-informed approaches, and art. It primarily draws from the Theravada tradition of early Buddhism to
            help you cultivate mindfulness within complex cultural histories.
          </p>
          <p className="text-lg">
            Approach any dialogue with Sati-AI with openness, honesty, and a sense of humor. Ask about your meditation
            practice or specific verses from the Pali Canon. The tool also emphasizes the importance of embodiment and
            art.
          </p>
          <p className="text-center text-lg">
            <i>Note that Sati-AI cannot replace a trained human teacher or mental health professional.</i>
          </p>
          <p className="text-lg">
            You may choose to &rdquo;memorialise&ldquo; any conversation with Sati as a Non-Fungible Token, or NFT. That
            way, you will always have access to the wisdom shared here. We display all NFTs ever minted, so that
            everyone can learn from the different conversations we each choose to have with Sati.
          </p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">May you be free from suffering...</span>
          </h1>
        </div>

        <div className="px-5">
          <div className="lg:w-full max-w-screen-md my-8 mx-auto">
            <Chat />
            <p className="text-center text-lg">
              <i>
                If any statement is incomplete, please type <b>continue</b>, and Sati-AI will expand or clarify.
              </i>
            </p>
            <Mint />
          </div>
        </div>

        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Example Conversations</span>
          </h1>
          <div>
            <button
              onClick={() => handleClick("Forgive")}
              className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
              Forgiveness
            </button>
            <button
              onClick={() => handleClick("Queerness")}
              className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
              Queerness
            </button>
            <button
              onClick={() => handleClick("Thickpresent")}
              className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
              Thick Present Meditation
            </button>
            <button
              onClick={() => handleClick("Sabiduria")}
              className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
              Sabiduria
            </button>
          </div>
          {activeComponent === "Forgive" && <Forgive />}
          {activeComponent === "Queerness" && <Queerness />}
          {activeComponent === "Thickpresent" && <Thickpresent />}
          {activeComponent === "Sabiduria" && <Sabiduria />}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with our unique NFT contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contract
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Check out our live website at{" "}
                <Link href="https://www.sati-ai.app" passHref className="link">
                  sati-ai.app
                </Link>{" "}
                to play in production.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
