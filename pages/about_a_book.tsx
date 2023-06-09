import { Text, Page } from '@vercel/examples-ui'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
    
       
        <iframe
src="https://www.chatbase.co/chatbot-iframe/rwywgxD6qex8vZxO0rnCU"
width="100%"
height="700"></iframe>


                <Link 
                    href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/compassionemptiness.pdf"
                    
                >
                    Download PDF of the book Satipatthana: The Direct Path to Realization by Bhikkhu Analayo
                </Link>
                <Link 
                    href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/compassionemptiness.pdf"
                    
                >
                    Download PDF of the book Early Buddhist Satipaṭṭhāna Meditation: A Practice Guide by Bhikkhu Analayo
                </Link>
                <Link 
                    href="https://www.buddhismuskunde.uni-hamburg.de/pdf/5-personen/analayo/compassionemptiness.pdf"
                    
                >
                    Download PDF of the book Compassion and Emptiness in Early Buddhist Meditation by Bhikkhu Analayo
                </Link>
          
     
                </section>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-3/4 mx-auto text-center">
        <div className="text-center">
          
                <Link 
                    href="https://linktr.ee/marlonbarriososolano"
                    className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white"
                >
                    Marlon Barrios Solano Links
                </Link>
            </div>
           
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
