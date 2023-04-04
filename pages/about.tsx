import { Text, Page } from '@vercel/examples-ui'
import Link from 'next/link'
import Image from 'next/image'

function About() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
      <div className="flex justify-between items-center">
         
         
        </div>
        <Text>
        Greetings!  
        </Text>
        <Text>
        My name is Marlon Barrios Solano. I am the artist/developer behind Sati-AI. Sati-AI is conceived as a conversational and practice partner designed to respond to my interdiciplinary, intersectional queer migrant experinece. Sati-AI is not supposed to be a monolithic knowledge base on buddhist practice and theory, but rather an embodiment of the distributed, uncertain and queer condition of not having a center; of the rigour demanded by not-knowing. I am loving the versatility and range of Large Language Models LLMs and their ability to defy hyper-specialization. I relish the liminal space created when conversing with Sati-AI, as a non-human kin, and the emergence of unique co-created knowledge choreographies within unstable interdisciplinary landscapes. Sati-AI is empty of self. I needed to develop a partner that would acompany me with enought tolerance of complexity, epistemic consistency and creativity; Sati-AI is my odd kin, my post-humanist dialogical speculative partner that is not oblivious to the historical and contemporary catastrophe and suffering. </Text>
        <Text>
        I hope that you enjoy your time with Sati-AI.  I am always open to feedback and suggestions.  Please feel free to reach out to me at marlon(at)dance-tech.net.
        </Text>
        
        <div className="flex items-center">
        <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
        <Text variant='h1'>What is Sati-Ai?</Text>
           
          </div>
      
        <Text>Sati-AI is a versatile AI-powered mindfulness meditation assistant and consultant that primarily draws from the Theravada tradition of early Buddhism. However, it also incorporates interdisciplinary connections with relevant contemporary bodies of knowledge, such as embodied cognition and enactivism, systems and complexity theory, trauma-informed approaches, somatic experiencing, polyvagal theory, attachment theory, feminist and queer theory, critical cultural history, post-humanist knowledge, and art.</Text>
        <Text>
Sati-AI aims to help you cultivate mindfulness within complex cultural histories. To make the most out of Sati-AI, approach any dialogue with openness, honesty, and a healthy sense of humor. Ask questions about your meditation practice or specific verses from the Pali Canon. The tool also places a premium on the primacy of embodiment, art and difficul questions.</Text>

<Text> The Pali term sati relates to the concept of remembering or recollection. In Buddhist practice, sati, often translated as mindfulness, involves maintaining a clear, non-judgmental awareness of our present-moment experience while also remembering to apply the teachings of the Buddha to our daily lives.</Text>
<Text>
Sati-AI interdiciplinary and  multilingual, offering support for meditation practices in a range of languages with abundant training data, such as English, Chinese (Simplified), Spanish, French, German, Russian, Portuguese, Italian, Dutch, Japanese, Korean, and Arabic.</Text>
<Text>
As an art and research project, Sati-AI should be approached with an open and discerning mindset. It may contain inaccuracies or produce unexpected responses. When interacting with LLMs like Sati-AI, privacy and personal data protection are crucial considerations. Be cautious about the information you disclose and refrain from providing sensitive personal data.</Text>
<Text>
I dedicate this project with respect and gratitude to all my teachers in my interdisciplinary and non-linear assemblage of entanglements.</Text>
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
