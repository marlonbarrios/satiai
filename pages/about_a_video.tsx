import { Page } from '@vercel/examples-ui'
import Link from 'next/link'



function About() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
       
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/vgZMPcrRmio" title="YouTube video player" ></iframe>

<iframe
src="https://www.chatbase.co/chatbot-iframe/lJZ5UW2LEGt9ey86ByxH-"
width="100%"
height="600"></iframe>

                <Link 
                    href="https://youtu.be/vgZMPcrRmio"
                    
                >Go to the video in YouTube </Link>
                </section>
      
      
        <div className="text-center">
          
                <Link 
                    href="https://linktr.ee/marlonbarriososolano"
                    className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
                >
                    Marlon Barrios Solano
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
            <Link href="/" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
                Back Home
            </Link>
        </div>
       
    </Page>
  )
}

export default About
