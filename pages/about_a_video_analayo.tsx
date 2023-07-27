
import Link from 'next/link'
import Script from 'next/script'
import { Text, Page } from '@vercel/examples-ui'

function Analayo() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
      <iframe width="100%" height="435" src="https://www.youtube.com/embed/cd8zAVltf4s"> </iframe>
        {/* <iframe
          src="https://www.chatbase.co/chatbot-iframe/lJZ5UW2LEGt9ey86ByxH-"
          width="100%"
          height="600">
        </iframe> */}

        {/* <Script strategy="beforeInteractive">
          {`
            window.chatbaseConfig = {
              chatbotId: "lJZ5UW2LEGt9ey86ByxH-",
            }
          `}
        </Script> */}
      
        <Script 
         id="qi0QMqp8UabLSeiK1SFiA"
         src="https://www.chatbase.co/embed.min.js"
          strategy="afterInteractive"
          defer
        />


       
      </section>
      <Text className="text-center">
    
      Examples of Questions:
     (Access Sati-Ai by clicking on the icon on the bottom right corner of the screen)
      </Text>
      <Text className="text-center">
      Can you provide an overview of the different Buddhist traditions discussed in the interview?
      </Text>
      <Text className="text-center">
      How do these traditions differ in terms of their teachings and practices?
</Text>

<Text className="text-center">
What are some key historical developments that have shaped these traditions?
</Text>
<Text className="text-center">
Are there any common threads or shared principles among these traditions?
</Text>
<Text className="text-center">
How do these traditions approach mindfulness meditation?
</Text>
<Text className="text-center">
What role does the concept of enlightenment play in these traditions?
</Text>
<Text className="text-center">
Are there any notable figures or teachers associated with each tradition?
</Text>
<Text className="text-center">
How do these traditions view the relationship between Buddhism and other religions or spiritual paths?
</Text>
<Text className="text-center">
Are there any specific practices or rituals unique to each tradition?
</Text>
<Text className="text-center">
How can practitioners from different traditions learn from and respect each others perspectives?
</Text>


      <div className="text-center">
        <Link href="https://linktr.ee/marlonbarriososolano" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Marlon Barrios Solano
        </Link>
      </div>

      <div className="text-center">
        <Link href="/contemplative_digital_art" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
        Contemplative Digital Art
        </Link>
      </div>

      <div className="text-center">
        <Link href="/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Back Home
        </Link>
      </div>
    </Page>
  )
}

export default Analayo
