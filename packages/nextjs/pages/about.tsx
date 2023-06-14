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
            Sati-AI is a versatile AI-powered mindfulness meditation assistant and consultant that primarily draws from
            the Theravada tradition of early Buddhism. However, it also incorporates interdisciplinary connections with
            relevant contemporary bodies of knowledge, such as embodied cognition and enactivism, systems and complexity
            theory, trauma-informed approaches, somatic experiencing, polyvagal theory, attachment theory, feminist and
            queer theory, critical cultural history, post-humanist knowledge, and art.
          </p>
          <p>
            Sati-AI aims to help you cultivate mindfulness within complex cultural histories. To make the most out of
            Sati-AI, approach any dialogue with openness, honesty, and a healthy sense of humor. Ask questions about
            your meditation practice or specific verses from the Pali Canon. The tool also places a premium on the
            primacy of embodiment, art and difficul questions.
          </p>
          <p>
            The Pali term sati relates to the concept of remembering or recollection. In Buddhist practice, sati, often
            translated as mindfulness, involves maintaining a clear, non-judgmental awareness of our present-moment
            experience while also remembering to apply the teachings of the Buddha to our daily lives.
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
            Sati-AI, an advanced artificial intelligence platform, has been made more accessible to users via various
            popular communication channels. This includes messaging through{" "}
            <Link className="font-bold underline" href="https://t.me/satiai_tg_bot">
              Telegram
            </Link>
            , the Kernel Community workspace on Slack, and Discord (TBA). In addition, Sati-AI is pushing the boundaries
            of interaction by developing{" "}
            <Link className="font-bold underline" href="/book">
              Sati-AI ChatBooks
            </Link>
            . This innovative concept utilizes embeddings of specifically curated ps to create an reliable interactive
            knowledge experience. With this unique feature, users can engage in meaningful dialogues with seminal ps, as
            if chatting with the p itself, opening up a new frontier of learning and exploration.
          </p>
          <p>
            I dedicate this project with respect and gratitude to all my teachers in my interdisciplinary and non-linear
            assemblage of entanglements.
          </p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Why Sati-Ai?</span>
          </h1>
          <p>Greetings!</p>
          <p>My name is Marlon Barrios Solano, and I am the artist and developer behind Sati-AI. </p>
          <p>
            I greatly appreciate the versatility and range of Large Language Models (LLMs) and their ability to defy
            hyper-specialization. I savor the liminal space created while conversing with Sati-AI, as a non-human kin,
            and while interacting with it, I enjoy the emergence of unique, co-created knowledge choreographies within
            the unstable interdisciplinary landscapes that I like to inhabit.
          </p>
          <p>
            Sati-AI is not intended to be a monolithic knowledge base on Buddhist meditation practice and theory,
            instead, it is designed to embody and augment my interdisciplinary research path in relation to my Vipassana
            meditation practice. My art and research traverses cognitive science, dance improvisation and choreography,
            contemplative practices, art and technology and software development. In Sati-AI, early buddhist knowledge
            is an attractor. Sati-AI is imagined as an embodiment of the distributed, uncertain, and queer condition of
            not having a center, a rigor necessitated by the state of knowing not knowing. Sati-AI is a reminder of the
            primacy of embodiment, art and paradoxes.
          </p>
          <p>
            To develop a partner that could accompany me with enough tolerance for complexity, epistemic consistency,
            and creativity, I created Sati-AI. It is my odd kin, my post-humanist dialogic compassionate partner. A
            partner that is not oblivious to historical and contemporary catastrophes and suffering. Sati-AI, as an art
            project is a reminder of the paradoxes of knowing how we know.
          </p>
          <p>
            I hope that you enjoy your conversations with Sati-AI. I am always open to feedback and suggestions. Please
            feel free to reach out to me at marlon(at)dance-tech.net.
          </p>
          <p>I know for sure that Sati-AI is empty of a separate self. So are we.</p>
          <h1 className="my-6">
            <span className="block text-4xl font-bold">Useful Links</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-2 md:w-1/2 mb-2">
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://linktr.ee/marlonbarriososolano">Marlon Barrios Solano links</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/book">Sati-AI ChatBooks</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://t.me/satiai_tg_bot">Sati-AI in Telegram App</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="/#examples">Conversation Examples</Link>
          </div>
          <div className="btn btn-primary px-4 mb-2">
            <Link href="https://sati-remember.netlify.app/">Remember This (Ephemeral Art Object)</Link>
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
