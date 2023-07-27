
import Link from 'next/link'
import { Text, Page } from '@vercel/examples-ui'
import Image from 'next/image'

function Contemplative() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
       
      </section>
      <div className="flex justify-between items-center"> 
        <Text variant='h1'>Contemplative Digital Art</Text>
         <div className="flex items-center">
       
            <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
          
        </div>
      <Text className="text-zinc-600">
In the realm of contemplative digital arts, I have found a dance of awareness weaving together themes of the body, impermanence, nature, observation, and emptiness. These works, like reflections in a mirror, enhance my understanding of the world directly in front of me.
</Text>

<Text className="text-zinc-600">
Bound together by algorithmic design and inherent transience, these creations reflect the Buddhist teaching of impermanence. Time here is an integral part of the creative process.
</Text>

<Text className="text-zinc-600">
While not all works utilize AI, they are all anchored in the digital realm. My creative practice navigates through generative design, creative coding, generative AI, and interactive web design. Adapting to the subject matter at hand, these tools sometimes serve as didactic instruments, other times adopting an unabashedly queer aesthetic. 

</Text>

<Text className="text-zinc-600">

And now, these creations are my gift and offering to you. Like a handful of leaves offered in the forest, they are intended to inspire, provoke, and awaken. May they serve as a catalyst for your own
journey of discovery. May they invite you into a dance with the ephemeral and the eternal, the tangible and the abstract, the personal and the universal. May they echo in your mind, resonate in your heart, and find a home in your consciousness. This is my offering to you, a token of generosity and a manifestation of interconnectedness in this vast digital realm.
      </Text>
      
      <Text className="text-center">
  <Link 
  href="/sketch"
  
>
The Body of the Breath
</Link>
</Text>
      <Text className="text-center">
      <Link 
      href="https://sati-remember.netlify.app/"
  >
    Remember This
  </Link>
  </Text>

      <div className="text-center">
        <Link href="https://linktr.ee/marlonbarriososolano" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Marlon Barrios Solano
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

export default Contemplative
