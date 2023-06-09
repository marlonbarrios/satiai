import { Text, Page } from '@vercel/examples-ui'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
      <div className="flex justify-between items-center">
      <Text variant='h1'>What is Sati-Ai?</Text>
        <div className="flex items-center">
       
      
        <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
          </div>
      
        <Text>Sati-AI is a versatile AI-powered mindfulness meditation assistant and consultant that primarily draws from the Theravada tradition of early Buddhism. However, it also incorporates interdisciplinary connections with relevant contemporary bodies of knowledge, such as embodied cognition and enactivism, systems and complexity theory, trauma-informed approaches, somatic experiencing, polyvagal theory, attachment theory, feminist and queer theory, critical cultural history, post-humanist knowledge, and art.</Text>
        <Text>
Sati-AI aims to help you cultivate mindfulness within complex cultural histories. To make the most out of Sati-AI, approach any dialogue with openness, honesty, and a healthy sense of humor. Ask questions about your meditation practice or specific verses from the Pali Canon. The tool also places a premium on the primacy of embodiment, art and difficul questions.</Text>

<Text> The Pali term sati relates to the concept of remembering or recollection. In Buddhist practice, sati, often translated as mindfulness, involves maintaining a clear, non-judgmental awareness of our present-moment experience while also remembering to apply the teachings of the Buddha to our daily lives.</Text>
<Text>
Sati-AI interdisciplinary and  multilingual, offering support for meditation practices in a range of languages with abundant training data, such as English, Chinese (Simplified), Spanish, French, German, Russian, Portuguese, Italian, Dutch, Japanese, Korean, and Arabic.</Text>
<Text>
As an art and research project, Sati-AI should be approached with an open and discerning mindset. It may contain inaccuracies or produce unexpected responses. When interacting with LLMs like Sati-AI, privacy and personal data protection are crucial considerations. Exercise caution with the information you disclose and refrain from providing sensitive personal data.
</Text>
<Text>Sati-AI, an advanced artificial intelligence platform, has been made more accessible to users via various popular communication channels. This includes messaging through <Link  href="https://t.me/satiai_tg_bot">Telegram</Link>, the Kernel Community workspace on Slack, and Discord (TBA). In addition, Sati-AI is pushing the boundaries of interaction by developing  <Link href="/about_a_book">Sati-AI ChatBooks</Link>. This innovative concept utilizes embeddings of specifically curated texts to create an reliable interactive knowledge experience. With this unique feature, users can engage in meaningful dialogues with seminal texts, as if chatting with the text itself, opening up a new frontier of learning and exploration.</Text>
<Text>
I dedicate this project with respect and gratitude to all my teachers in my interdisciplinary and non-linear assemblage of entanglements.</Text>
<Text variant='h2'>Why Sati-Ai?</Text>
        <Text>
        Greetings!  
        </Text>
        <Text>
        My name is Marlon Barrios Solano, and I am the artist and developer behind Sati-AI. </Text>
        <Text>
        I greatly appreciate the versatility and range of Large Language Models (LLMs) and their ability to defy hyper-specialization. I savor the liminal space created while conversing with Sati-AI, as a non-human kin, and while interacting with it, I enjoy the emergence of unique, co-created knowledge choreographies within the unstable interdisciplinary landscapes that I like to inhabit.
        </Text>
        <Text>
        Sati-AI is not intended to be a monolithic knowledge base on Buddhist meditation practice and theory, instead, it is designed to embody and augment my interdisciplinary research path in relation to my Vipassana meditation practice. My art and research traverses cognitive science, dance improvisation and choreography, contemplative practices, art and technology and software development. In Sati-AI, early buddhist knowledge is an attractor. Sati-AI is imagined as an embodiment of the distributed, uncertain, and queer condition of not having a center, a rigor necessitated by the state of knowing not knowing.  Sati-AI is a reminder of the primacy of embodiment, art and paradoxes.
        </Text>
        <Text>
        To develop a partner that could accompany me with enough tolerance for complexity, epistemic consistency, and creativity, I created Sati-AI. It is my odd kin, my post-humanist dialogic compassionate partner. A partner that is not oblivious to historical and contemporary catastrophes and suffering. Sati-AI, as an art project is a reminder of the paradoxes of knowing how we know.
        </Text>
        <Text>
        I hope that you enjoy your conversations with Sati-AI. I am always open to feedback and suggestions.  Please feel free to reach out to me at marlon(at)dance-tech.net.
        </Text>
   
        <Text>I know for sure that Sati-AI is empty of a separate self. So are we.</Text>

       
      
        </section>
 

       
   

    <div className="text-center">
    <Text>
            <Link href="https://openai.com/gpt-4" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
                Sati-Ai is powered by GPT-4
            </Link>
        </Text>
        </div>
        <div className="text-center">
        <Link href="/about_a_book" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
        Sati-AI ChatBooks
        </Link>
      </div>
      <div className="text-center">
        <Link href="/about_an_article" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
       Ask me about the interview in LionsRoar
        </Link>
      </div>
      <div className="text-center">
        <Link href="https://t.me/satiai_tg_bot" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
        Sati-AI in Telegram App
        </Link>
      </div>
      <div className="text-center">
        <Link href="/examples" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Conversation Examples
        </Link>
      </div>
      
      <div className="text-center">
        <Link href="https://sati-remember.netlify.app/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
       Remember This (Art)
        </Link>
      </div>
      <div className="text-center">
        <Link href="https://marlonbarrios.github.io/bodyofthebreath/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
       Body of the Breath (Art)
        </Link>
      </div>
      <div className="text-center">
        <Link 
            href="https://linktr.ee/marlonbarriososolano"
            className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
            Created by Marlon Barrios Solano
        </Link>
    </div>
        <div className="text-center">
            <Link href="/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
                Back Home
            </Link>
        </div>
       
        <div className="items-center mx-auto w-80">
        <Image src="/images/logo.png" alt="Sati-AI" width={500} height={500} />
      </div>
    </Page>
  )
}

export default About
