import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Link from 'next/link'
import Image from 'next/image'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-center"> 
        <Text variant='h1'>Sati-Ai </Text>
         <div className="flex items-center">
       
            <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
          
        </div>
        <Text className="text-zinc-600">Sati-AI is a multi-lingual AI-powered mindfulness meditation assistant and consultant that incorporates interdisciplinary connections with contemporary knowledge, such as embodied cognition and enactivism, trauma-informed approaches, and art. It primarily draws from the Theravada tradition of early Buddhism to help you cultivate mindfulness within complex cultural histories.
        </Text>
        <Text className="text-zinc-600">
Approach any dialogue with Sati-AI with openness, honesty, and a sense of humor. Ask about your meditation practice or specific verses from the Pali Canon. The tool also emphasizes the importance of embodiment and art.
        </Text>
        <Text className="text-zinc-600"><i>
Note that Sati-AI cannot replace a trained human teacher or mental health professional.</i>
</Text>

        <Text variant="h2" className="mb-6">
          May you be free from suffering...
        </Text>
        <div className="lg:w-full my-8">
          <Chat />
          <Text className="text-zinc-600"><i>If any statement is incomplete, please type <b>continue</b>, and Sati-AI will expand or clarify.</i></Text>
        </div>
      </section>
      <div className="text-center">
        <Link href="/about" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Learn More
        </Link>
      </div>
      <div className="text-center">
        <Link href="/about_a_book" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
        Sati-AI ChatBooks
        </Link>
      </div>
     
      <div className="text-center">
        <Link href="https://sati-remember.netlify.app/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
       Remember This (Ephemeral Art Object)
        </Link>
      </div>
      <div className="text-center">
        <Link href="https://marlonbarrios.github.io/bodyofthebreath/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
       Body of the Breath (Ephemeral Art Object)
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
      
     
      <div className="items-center mx-auto w-80">
        <Image src="/images/logo.png" alt="Sati-AI" width={500} height={500} />
      </div>
    </Page>
  )
}

export default Home
