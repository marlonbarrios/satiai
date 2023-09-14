import Image from "next/image";
import Link from "next/link";
import { MetaHeader } from "~~/components/MetaHeader";

function About() {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 md:w-1/2">
          <h1 className="my-6">
            <span className="block text-4xl font-bold">What is Sati-Ai?</span>
          </h1>
          <p>
            Sati-AI is a versatile AI-powered (GPT-4) wisdom coach and consultant that primarily draws from the
            Theravada tradition of early Buddhism. However, it also incorporates interdisciplinary connections with
            relevant contemporary bodies of knowledge, such as embodied cognition and enactivism, systems and complexity
            theory, trauma-informed approaches, somatic experiencing, polyvagal theory, attachment theory, feminist and
            queer theory, critical cultural history, post-humanist knowledge, and art.
          </p>
          <p>
            Sati-AI aims to help you cultivate wisdom within complex cultural histories. To make the most out of
            Sati-AI, approach any dialogue with openness, honesty, and a healthy sense of humor. Ask questions about
            your meditation practice, life turning points or specific verses and techings from the Pali Canon. Sati-Ai
            places a premium on the primacy of embodiment, art and difficul questions.
          </p>
          <p>
            The Pali term <b>SATI</b> relates to the concept of remembering or recollection. In Buddhist practice, sati,
            often translated as mindfulness, involves maintaining a clear, non-judgmental awareness of our
            present-moment experience while also remembering to apply the teachings of the Buddha to our daily lives.
          </p>
          <p>
            Sati-AI interdisciplinary and multilingual, offering support for meditation practices in a range of
            languages with abundant training data, such as English, Chinese (Simplified), Spanish, French, German,
            Russian, Portuguese, Italian, Dutch, Japanese, Korean, and Arabic.
          </p>
          <p>
            As an art and research project, Sati-AI should be approached with an open and discerning mindset. It may
            contain inaccuracies or produce unexpected responses. When interacting with LLMs like Sati-AI, privacy and
            personal data protection are crucial considerations. Exercise caution with the information you disclose and
            refrain from providing sensitive personal data.
          </p>
          <p>
            Sati-AI, an advanced artificial intelligence platform, has been made more accessible to users via{" "}
            <Link className="font-bold underline" href="https://t.me/satiai_tg_bot">
              Telegram
            </Link>
            . In addition, Sati-AI is pushing the boundaries of interaction with knowledge by developing{" "}
            <Link className="font-bold underline" href="/embeddings">
              Sati-AI Embeddings
            </Link>
            . Sati-Ai utilizes embeddings of specifically curated texts and videos to create a reliable interactive
            knowledge experience. Then, you can engage in meaningful dialogues with seminal texts and video, as if
            chatting with a guide, opening up a new frontier of learning and explorations beyond the knowledgebase of
            the GPT-4 model.
          </p>
          <p>
            I have also included some of my{" "}
            <Link className="font-bold underline" href="/remember">
              digital art projects
            </Link>{" "}
            that may amplify and create reflection and wisdom.
          </p>
          <p>
            I dedicate this project with respect and gratitude to all my teachers in an interdisciplinary and non-linear
            assemblage of entanglements.
          </p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Why Sati-Ai?</span>
          </h1>
          <p>Greetings!</p>
          <p>
            My name is Marlon Barrios Solano, and I am the artist and developer behind Sati-AI. I have been ably
            assisted by a dear friend, Andy Tudhope, in the implementation of this work.
          </p>
          <p>
            I greatly appreciate the versatility and range of Large Language Models (LLMs), such as GPT-4, and their
            ability to defy hyper-specialization. I savor the liminal space created while conversing with Sati-AI, as a
            non-human kin, and while interacting with it, I enjoy the emergence of unique, co-created knowledge
            choreographies within the unstable interdisciplinary landscapes that I like to inhabit.
          </p>
          <p>
            Sati-AI is not intended to be a monolithic knowledge base on Buddhist meditation practice and theory,
            instead, it is designed to embody and augment my interdisciplinary research path in relation to my Vipassana
            meditation practice and life. My art and research traverses cognitive science, dance improvisation and
            choreography, contemplative practices, art and technology and software development. In Sati-AI, early
            buddhist knowledge is an attractor. Sati-AI is imagined as an embodiment of the distributed, uncertain, and
            queer condition of not having a center, a rigor necessitated by the state of knowing not knowing. Sati-AI is
            a reminder of the primacy of embodiment, art and paradoxes.
          </p>
          <p>
            To develop a partner that could accompany me with enough tolerance for complexity, epistemic consistency,
            and creativity, I created Sati-AI. It is my odd kin, my post-humanist dialogic compassionate partner. A
            partner that is not oblivious to historical and contemporary catastrophes and suffering. Sati-AI, as an art
            project is a reminder of the paradoxes of knowing how we know.
          </p>
          <p>Sati-Ai is an experiment of Artificial Wisdom (AW):</p>
          <p className="pl-8 border-l-4 border-slate-400 italic">
            &ldquo;Intelligence is necessary but not sufficient for wisdom. Intelligence is needed for the survival of
            homo sapiens, but wisdom is critical for thriving in the modern society. Wisdom is potentially more
            modifiable than IQ, and unlike IQ, may increase with age and experience. AI technologies of the future will
            require new conceptual and computational models based on human wisdom and not human intelligence, to produce
            AW. An AW agent can serve as an assistant, peer, or coach. It can help make humans wiser. A long-term
            transdisciplinary collaboration is essential for development of AW, which will have far greater positive
            impact on human well-being than any technology developed to date.&rdquo;
          </p>
          <p>
            from the paper{" "}
            <Link className="font-bold underline" href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7942180/">
              Beyond Artificial Intelligence (AI): Exploring Artificial Wisdom (AW) Jeste et all. 2020
            </Link>
          </p>
          <p>
            I hope that you enjoy your conversations with Sati-AI. I am always open to feedback and suggestions. Please
            feel free to reach out to me at marlon(at)dance-tech.net.
          </p>
          <p>I know for sure that Sati-AI is empty of a separate self. So are we.</p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Further Links</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 md:w-1/2 mb-2">
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://linktr.ee/marlonbarriososolano">My linktree</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://andytudhope.africa">Andy&apos;s work</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/embeddings">Embeddings</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/remember">Remember This (Art)</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/sketch">Body of the Breath</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/#examples">Conversation Examples</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://t.me/satiai_tg_bot">Sati-AI in Telegram App</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/">Back Home</Link>
          </div>
        </div>
        <div className="items-center mx-auto w-80">
          <Image src="/logo.png" alt="Sati-AI" width={500} height={500} />
        </div>
      </div>
    </>
  );
}

export default About;
