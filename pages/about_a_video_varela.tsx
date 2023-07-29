
import Link from 'next/link'
import Script from 'next/script'
import { Text, Page } from '@vercel/examples-ui'

function Varela() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/vgZMPcrRmio" title="YouTube video player"></iframe>

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
          id="lJZ5UW2LEGt9ey86ByxH-" 
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
      Why does Varela believe it is important to remind ourselves of the interconnectedness of science, art, and spirituality?</Text>

      <Text className="text-center">
How does Varela view the relationship between his scientific work and the world around him?</Text>

<Text className="text-center">
What does Varela believe is the key to understanding cognition?</Text>

<Text className="text-center">
How does Varela suggest that biology holds the key to understanding cognition?</Text>
<Text className="text-center">
      What does Varela mean by the term “enactive”?
      </Text>

<Text className="text-center">
What does Varela mean by bringing forth a world and how does it relate to the concept of multiversality?</Text>

<Text className="text-center">
How does Varela use the example of color vision to illustrate the concept of multiversality?</Text>
 
<Text className="text-center">
What does Varela suggest about the universality and cultural construct of perception and feeling?</Text>

<Text className="text-center">
How does Varelas perspective challenge traditional notions of perception and cognition?</Text>

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

export default Varela
