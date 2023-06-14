import Link from "next/link";
import { MetaHeader } from "~~/components/MetaHeader";

function Book() {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Study Specific Books with Sati</span>
          </h1>
          <p>
            Rather than providing general assistance and guidance, this page allows you to ask Sati questions about
            specific texts that you may wish to study in greater detail.
          </p>
          <iframe src="https://www.chatbase.co/chatbot-iframe/rwywgxD6qex8vZxO0rnCU" width="100%" height="700" />
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
      </div>
    </>
  );
}

export default Book;
