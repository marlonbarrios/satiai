import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
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
            Sati-AI is a multi-lingual AI-powered buddhist wisdom guide and mindfulness meditation coach that
            incorporates interdisciplinary connections with contemporary knowledge, such as embodied cognition and
            enactivism, trauma-informed approaches, and art. It primarily draws from the Theravada tradition of early
            Buddhism to help you cultivate mindfulness and wisdom within complex cultural histories.
          </p>
          <p className="text-lg">
            Approach any dialogue with Sati-AI with openness, honesty, and a sense of humor. Ask about your meditation
            practice or specific verses from the Pali Canon. The tool also emphasizes the importance of embodiment and
            art.
          </p>
          <p className="text-center text-lg">
            <i>Note that Sati-AI cannot replace a trained human teacher or mental health professional.</i>
          </p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">May you be free from suffering...</span>
          </h1>
        </div>

        <div className="px-5 md:w-1/2">
          <p>
            Sati-AI is built with &ldquo;embeddings&rdquo;, a method by which we can train an LLM on very specific input
            data - books, articles, videos etc. - that are especially relevant to the context of mindfulness and
            meditation within the Theravada tradition of Buddhism, thereby making its response even more particular.
          </p>
          <p>
            These representations capture the essential features of the original content, which allows Sati to
            understand and converse with you about it. It is somewhat like talking with the authors themselves.
          </p>
        </div>

        <div className="px-5 md:w-1/2">
          <iframe src="https://www.chatbase.co/chatbot-iframe/lJZ5UW2LEGt9ey86ByxH-" width="100%" height="600" />
          <p className="text-m">You can make your own embeddings very easily by following the link below:</p>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.chatbase.co" target="_blank" rel="noreferrer">
              Chatbase
            </Link>
          </div>
          <p className="text-m">
            Some of the sources for the embeddings we used to train this version of Sati are listed below. They include
            books, video interviews, and a collection of different articles.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:w-1/2 mt-4 mb-2">
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/direct-path.pdf">
              Satipatthana: The Direct Path to Realization
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/satipatthanapracticeguide.pdf">
              Early Buddhist Satipaṭṭhāna Meditation: A Practice Guide
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/compassionemptiness.pdf">
              Compassion and Emptiness in Early Buddhist Meditation
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.youtube.com/watch?v=vgZMPcrRmio">
              Francisco Varela on Science, Religion and Art
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.youtube.com/watch?v=wu9A1YHLU5Q&t=298">
              Sharon Salzberg: The Journey from Isolation to Openness
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.youtube.com/watch?v=cd8zAVltf4s">
              Bhikku Analayo: Respecting Different Buddhist Traditions
            </Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.lionsroar.com/ai-meditation-teacher/">
              Lion&apos;s Roar: Meet Sati-AI, a Non-Human Mindfulness Meditation Teacher
            </Link>
          </div>
        </div>

        <div className="px-5 md:w-1/2 text-center">
          <hr />
          <a
            className="btn btn-primary px-10 my-10 rounded-full space-x-3"
            href="https://testnets.opensea.io/collection/sati-re-minding"
            target="_blank"
            rel="noreferrer"
          >
            Our collected memories
          </a>
          <hr />
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="text-center">
            <p className="text-4xl">In the Media</p>
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <SparklesIcon className="h-8 w-8 fill-secondary" />
              <p>
                Remembering to Remember:{" "}
                <Link
                  href="https://we.scienceandnonduality.com/podcasts/sounds-of-sand/episodes/2148045015"
                  passHref
                  className="link"
                >
                  Science and Nonduality Podcast
                </Link>{" "}
                with Marlon Barrios Solano.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Meet Sati-Ai:
                <br />
                <Link href="https://www.lionsroar.com/ai-meditation-teacher/" passHref className="link">
                  Lion&apos;s Roar Magazine
                </Link>{" "}
                and a more-than-human interview.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
