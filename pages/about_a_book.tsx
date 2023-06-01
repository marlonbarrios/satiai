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
