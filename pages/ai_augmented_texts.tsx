
import Link from 'next/link'
import { Text, Page } from '@vercel/examples-ui'
import Image from 'next/image'

function Texts() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
       
      </section>
      <div className="flex justify-between items-center"> 
        <Text variant='h1'>Sati-Ai ChatTexts</Text>
         <div className="flex items-center">
       
            <Link href="/">
              <Image src="/images/logo.png" alt="Sati-AI" width={100} height={100} />
            </Link>
          </div>
          
        </div>
      <Text className="text-zinc-600">
        We are excited to present Sati-AI Cha: AI Augmented Texts. A groundbreaking project that leverages artificial intelligence to enhance your learning experience. With Sati-AI ChatTexts, we provide a conversational interface to the knowledge contained within PDFs and websites. This allows you to ask questionsto Sati-Ai  and receive answers in real-time, as you read the text. We hope that this will help you to engage more deeply with the content and to learn more effectively. Sample Questions are provided below each relevant text. 
      </Text>
      
      <Text className="text-center">
  <Link 
  href="/about_a_book"
  
>
Books of Bhikkhu Analayo
</Link>
</Text>
      <Text className="text-center">
      <Link 
      href="/about_an_article"
  >
   Article on LionsRoar about Sati-Ai
  </Link>
  </Text>

<Text className="text-zinc-600">
        Disclaimer: this is a work in prototype stage and it may have innacuracies.
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

export default Texts
