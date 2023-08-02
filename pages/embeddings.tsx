import { Text, Page } from '@vercel/examples-ui'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <div className="flex justify-between items-center"> 
        <Text variant='h1'>Sati-Ai Embeddings: Curated Knowledge </Text>
         <div className="flex items-center">
            <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
        </div>
        <Text className="text-zinc-600"> 
We proudly present Sati-Ai Embeddings. It is a way to embed specific knowledge and add it to the Sati-Ai knowledge base.
Find the chat in the bottom right corner of the screen.
</Text>
<Text className="text-zinc-600"> 
Sati-Ai uses embeddings. In the context of Large Language Models (LLMs), embeddings are numerical representations of words, sentences, or documents in a high-dimensional space. These representations capture the essential features of the original content, which allows the AI to understand and converse about it.
</Text>
<Text className="text-zinc-600"> 
Additionally, Sati-Ai provides links to the embedded resources, summarizes content, finds correlations, and generates relevant questions: try it, be creative and curious. 
</Text>
<Text className="text-zinc-600">
Curated by Marlon Barrios Solano
</Text>
<Text className="text-zinc-600">
<b>
Embedded Books: 
</b>
</Text>
<Text className="text-zinc-600">
Satipatthana: The Direct Path to Realization by Bhikkhu Analayo
</Text>
<Text className="text-zinc-600">
Early Buddhist Satipaṭṭhāna Meditation: A Practice Guide by Bhikkhu Analayo
</Text>
<Text className="text-zinc-600">
Compassion and Emptiness in Early Buddhist Meditation by Bhikkhu Analayo
</Text>
<Text className="text-zinc-600">
    <b>
Embedded Videos:
</b>
</Text>
<Text className="text-zinc-600">
Bhikkhu Analayo on Respecting the Different Buddhist Traditions interviewed by Evan Hetritze
</Text>
<Text className="text-zinc-600">
Francisco Varela on Art, Science, and Spirituality
</Text>
<Text className="text-zinc-600">
The Map of Wisdom: Joseph Goldstein on the Core Buddhist Teachings
</Text>
<Text className="text-zinc-600">
Sharon Salzberg on the Journey from Isolation to Openness
</Text>
<Text className="text-zinc-600">
    <b>
Online Article:
</b>
</Text>
<Text className="text-zinc-600">
Meet Sati-AI, a Non-Human Mindfulness Meditation Teacher. 
</Text>

   
<Script 
         id="lJZ5UW2LEGt9ey86ByxH-"
         src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          defer
        />
      
      </section>
      <div className="text-center">
        <Link href="/about" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Learn More
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
