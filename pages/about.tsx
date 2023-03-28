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
        <Text>
            The Pali term <b>sati</b> is related to the concept of <b>remembering</b>  or <b>recollection</b>. In the context of Buddhist practice, sati (often translated as <b>mindfulness</b>) involves maintaining a clear, non-judgmental awareness of our present-moment experience while also remembering to apply the teachings of the Buddha to our daily lives.
        </Text>
        <Text>
            Sati-AI serves as a meditation assistant, capable of addressing inquiries related to mindfulness meditation, as well as early Buddhist concepts and philosophies. With its <b>multilingual capabilities</b>, Sati-AI provides guidance in a range of languages, enabling users to receive support for their meditation practices in their preferred language.
        </Text>
        <Text>
            Sati-AI works well in languages with abundant training data, such as English, Chinese (Simplified), Spanish, French, German, Russian, Portuguese, Italian, Dutch, Japanese, Korean, and Arabic.
        </Text>
        <Text>
            As a Large Language Model (LLM), Sati-AI is designed to supplement your meditation practice, but it should not supplant the expertise of human teachers, friends, or mental health professionals.
        </Text>
        <Text>
            <b>Envisioned as a digital art project, Sati-AI should be approached with an open, yet discerning, mindset. It may contain inaccuracies or produce unexpected responses.</b>
        </Text>
        <Text>
            When engaging with LLMs like this one, privacy and personal data protection are crucial considerations. Be careful sharing too much personal information shared during these interactions. Although encrypted and anonymised, Sati-AI does transmit your questions to the OpenAI API, which we do not control and cannot guarantee. Sati-AI itself does not retain any personal information. Nevertheless, please be cautious about the information you disclose and refrain from providing sensitive personal data.
        </Text>
        <Text>
            <b>This project is dedicated with respect and gratitude to all my teachers.</b>
        </Text>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 mx-auto text-center my-10">
            <div>
            <div className='mb-4'>
                Concept, programming and prompt engineering by: 
            </div>
                <Link 
                    href="https://marlonbarrios.github.io/"
                    className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
                >
                    Marlon Barrios Solano
                </Link>
            </div>
            <div>
                <div className='mb-4'>
                    Mindfulness meditation for creative technologists and artists:
                </div>
                <Link 
                    href="https://marlonbarrios.github.io/mindfulness/"
                    className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
                >
                    Sign Up
                </Link>
            </div>
        </div>
        </section>
        <div className='text-center'>
            <Link 
                href="https://patreon.com/user?u=84024387&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_linkv"
                className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
            >
                Patreon
            </Link>.
        </div>
        <div className="text-center">
            <Link href="/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
                Back Home
            </Link>
        </div>
    </Page>
  )
}

export default About
