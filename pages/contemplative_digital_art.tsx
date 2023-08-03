
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
Body of the Breath: interactive animation to synchronize breath and body
</Link>
</Text>
      <Text className="text-center">
      <Link 
  href="https://marlonbarrios.github.io/black_ink_enso/"
  
>
Dymanic Enso: contemplative everchanging Enso (Zen circle)
</Link>
</Text>
      <Text className="text-center">
      <Link 
      href="https://rememberthis1.netlify.app/"
  >
    Remember This: generative AI text and image as reminders of impermanence
  </Link>
  </Text>
  <Text className="text-center">
      <Link 
      href="https://marlonbarrios.github.io/chromatic_crescent/"
    >Chromatic Crescent: very subtle animation of a diffuse circle of ever changing colors
  </Link>
  </Text>
  <Text className="text-center">
      <Link 
      href="https://medium.com/@marlon_21867/canonical-soft-space-01-a751d337da2a"
  >
    Canonical (Desktop Only): a soft space to contemplate the body and dance in front to the computer with webcam input.
  </Link>
  </Text>
  <Text className="text-center">
      <Link 
      href="https://medium.com/@marlon_21867/thick-present-awareness-guided-meditation-a-post-humanist-practice-b0ed88521f01"
  >
    Thick Present Awareness (Guided Meditation): video with a post-humanist practice guided by a deepfake synthetic teacher.
  </Link>
  </Text>

  <Text className="text-center">
      <Link 
      href="
      https://marlonbarrios.github.io/flow_field_02/">Emergent Paths: interactive animation of a flow field
  </Link>
  </Text>

  <Text className="text-center">
      <Link 
      href="https://marlonbarrios.github.io/spirograh100squares/"
    >Emergent Mandalas: generative  animation of rotating squares 
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
