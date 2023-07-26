
import Link from 'next/link'
import Script from 'next/script'
import { Text, Page } from '@vercel/examples-ui'

function About() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
       
      </section>
      <Text variant='h1'>ChatVideos: AI Augmented</Text>
      <Text className="text-zinc-600">
        We are excited to present Sati-AI ChatVideos, a groundbreaking project that leverages artificial intelligence to enhance your learning experience. With Sati-AI ChatVideos, we provide a conversational interface to the knowledge contained within videos.
      </Text>

      <Text className="text-center">
      <Link 
      href="/about_a_video_varela"
  >
     Francisco Varela
  </Link>
  </Text>

  <Text className="text-center">
  <Link 
  href="/about_a_video_varela"
  
>
Sharon Salzberg
</Link>
</Text>



      <div className="text-center">
        <Link href="https://linktr.ee/marlonbarriososolano" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
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
