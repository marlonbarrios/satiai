import Link from "next/link";
import { MetaHeader } from "~~/components/MetaHeader";

function Embeddings() {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Learn About Embeddings</span>
          </h1>
          <p>
            The chat window on the home page talks to OpenAI&apos;s Chat GPT-4 model directly, using a prompt we have
            crafted over the course of many conversations with Sati. The idea there is that you get to talk with all the
            information GPT-4 was ever trained on, through the specific and carefully crafted lens of our prompt, which
            ensures that Sati responds with particular references and in a curated style.
          </p>
          <p>
            There are other ways of adapting LLMs to meet our educational and other needs. On this page, we&apos;re
            going to be using &ldquo;embeddings&rdquo;, which is a method by which we can train an LLM on very specific
            input data - books, articles, videos etc. - that are especially relevant to the context of mindfulness and
            meditation within the Theravada tradition of Buddhism, thereby making its response even more particular.
          </p>
          <p>
            These representations capture the essential features of the original content, which allows Sati to
            understand and converse with you about it. It is eerily like talking with the authors themselves. You can
            make your own embeddings very easily by following the link below:
          </p>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.chatbase.co" target="_blank" rel="noreferrer">
              Chatbase
            </Link>
          </div>
        </div>

        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Books</span>
          </h1>
          <iframe src="https://www.chatbase.co/chatbot-iframe/rwywgxD6qex8vZxO0rnCU" width="100%" height="600" />
        </div>
        <h1 className="mt-6">
          <span className="block text-4xl font-bold">Download the Books</span>
        </h1>
        <p className="text-m">All the books below were written by Bhikkhu Analayo.</p>
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
        </div>

        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Videos</span>
          </h1>
          <div className="w-full mb-4 lg:w-1/2 lg:pr-4 float-left">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/lJZ5UW2LEGt9ey86ByxH-"
              width="100%"
              height="600"
            ></iframe>
          </div>
          <div className="w-full mb-4 lg:w-1/2 lg:pl-4 float-left">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/CpbbyN7DQuTJwO1QYBHA9"
              width="100%"
              height="600"
            ></iframe>
          </div>
          <div className="w-full mb-4 lg:w-1/2 lg:pl-4 float-left">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/qi0QMqp8UabLSeiK1SFiA"
              width="100%"
              height="600"
            ></iframe>
          </div>
        </div>
        <h1 className="mt-6">
          <span className="block text-4xl font-bold">Watch the Full Versions</span>
        </h1>
        <div className="flex flex-wrap gap-2 md:w-1/2 mt-4 mb-2">
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
        </div>

        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Articles</span>
          </h1>
          <iframe src="https://www.chatbase.co/chatbot-iframe/NdutSkHh5UvoI8oqijyBc" width="100%" height="600"></iframe>
        </div>
        <h1 className="mt-6">
          <span className="block text-4xl font-bold">Read the Full Version</span>
        </h1>
        <div className="flex flex-wrap gap-2 md:w-1/2 mt-4 mb-2">
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://www.lionsroar.com/ai-meditation-teacher/">
              Lion&apos;s Roar: Meet Sati-AI, a Non-Human Mindfulness Meditation Teacher
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Embeddings;
