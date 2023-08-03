import { Text, Page } from '@vercel/examples-ui'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-center"> 
        <Text variant='h1'>Sati-Ai On The Media </Text>
         <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
        </div>
        <Text className="text-zinc-600"> 
<Link href="https://we.scienceandnonduality.com/podcasts/sounds-of-sand/episodes/2148045015">
Remembering to Remember: Marlon Barrios Solano at Sounds of SAND/Science and Non-duality Podcast</Link>.
</Text>

<Text className="text-zinc-600"> 
<Link href="https://www.lionsroar.com/ai-meditation-teacher/">
Meet Sati-AI, a Non-Human Mindfulness Meditation Teacher on LionsRoar Magazine
</Link></Text>


      </section>
      <div className="text-center">
        <Link href="/about" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Learn More
        </Link>
      </div>
      <div className="text-center">
        <Link href="/embeddings" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
      Sati-Ai Embeddings
        </Link>
      </div>
     
      <div className="text-center">
        <Link href="/contemplative_digital_art" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
        Contemplative Digital Art
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
    <Text>
      <Link href="https://openai.com/gpt-4" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
                Sati-Ai is powered by OpenAI
      </Link>
        </Text>
        </div>
      <div className="text-center">
        <Link 
            href="https://linktr.ee/marlonbarriososolano"
            className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
        >Marlon Barrios Solano
        </Link>
    </div>
    <div className="text-center">
    <Link 
            href="https://patreon.com/user?u=84024387&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link"
            className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Dana | Donation
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
export default Home
