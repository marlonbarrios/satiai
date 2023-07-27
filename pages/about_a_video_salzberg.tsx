
import Link from 'next/link'
import Script from 'next/script'
import { Text, Page } from '@vercel/examples-ui'

function Salzberg() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/wu9A1YHLU5Q?start=298" title="YouTube video player" allow="web-share, allowfullscreen" ></iframe>

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
          id="CpbbyN7DQuTJwO1QYBHA9"
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
      How does Sharon Salzberg describe the journey from isolation to openness?
      </Text>
      <Text className="text-center">
What are some of the building blocks or conditions that can lead to a sense of possibility and creativity?
</Text>
<Text className="text-center">
How does Sharon Salzberg suggest we can cultivate more space, openness, and clarity in our lives?
</Text>
<Text className="text-center">
What are some of the narrow confining habits of mind and forces of mind and body that Sharon Salzberg mentions?
</Text>
<Text className="text-center">
How can we work with these narrow confining habits to create more joy and energy in our lives?
</Text>
<Text className="text-center">
What does Sharon Salzberg mean by the stress dynamic and how does it relate to our ability to meet challenging situations?
</Text>
<Text className="text-center">
Can you explain the story Sharon Salzberg shares about the rumor in Hiroshima after the atom bomb dropped?
</Text>
<Text className="text-center">
What does Sharon Salzberg rely on as a North star to guide her, regardless of the conditions happening around her?
</Text>
<Text className="text-center">
How does Sharon Salzberg define resilience and how can we cultivate it in our own lives?
</Text>
<Text className="text-center">
Can you provide more details about the fundamental understandings Sharon Salzberg has been offered as a meditation student and how she tries to live her life based on those teachings?
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

export default Salzberg
