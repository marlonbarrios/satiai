import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'

import { ReactNode } from 'react';

type HomeProps = {
  children: ReactNode[];
}


function Home({ children }: HomeProps) {
  return (
    <Page className="flex flex-col gap-12">
      <Head>
        <title>Sati-AI</title>
      </Head>
     
      <section className="flex flex-col gap-3">
      <Text variant="h1">Sati-AI</Text>
      <Image src="/images/logo.png" alt="Sati-AI" width={500} height={500} />
        <Text variant="h2">May you be free from suffering...</Text>
        <div className="lg:w-2/3">
          <Chat />
             <Text className="text-zinc-600"><i>If any of my previous responses seemed incomplete, please type <b>continue</b>, and I will do my best to expand or clarify my previous statements.</i></Text>
        </div>
        <section className="flex flex-col gap-6">
    
        <Text variant="h1">What is Sati-AI?</Text>
        <Text className="text-zinc-600">The Pali term <b>sati</b> is related to the concept of <b>remembering</b>  or <b>recollection</b>. In the context of Buddhist practice, sati, often translated as <b>mindfulness</b>, involves maintaining a clear, non-judgmental awareness of our present-moment experience while also remembering to apply the teachings of the Buddha to our daily lives.</Text>
      <Text className="text-zinc-600">Sati-AI serves as an AI-driven Buddhist meditation assistant, capable of addressing all inquiries related to mindfulness meditation, as well as early Buddhist concepts and philosophies. With its <b>multilingual capabilities</b>, Sati-AI provides guidance in a range of languages, enabling users to receive support for their meditation practices in their preferred language. To access its insightful and dependable advice, simply pose any question related to mindfulness and early Buddhism. Experience the advantages of a mindfulness meditation guide at your disposal, anytime and anywhere.</Text>

      <Text className="text-zinc-600">Sati-AI generally excels in languages with abundant training data, such as English, Chinese (Simplified), Spanish, French, German, Russian, Portuguese, Italian, Dutch, Japanese, Korean, and Arabic.</Text>

       <Text className="text-zinc-600"><i>Fueled by a vast AI language model, Sati-AI is designed to supplement your meditation practice, but it should not supplant the expertise of human teachers, friends, or mental health professionals.</i></Text>

       <Text className="text-zinc-600"><i>Envisioned as a digital art project, Sati-AI should be approached with an open yet discerning mindset. It may occasionally contain inaccuracies or produce unexpected responses.</i></Text>
     
       <Text className="text-zinc-600"><i>When engaging with Large Learning Models (LLMs) like this one, privacy and personal data protection are crucial considerations. While LLMs strive to offer users accurate and useful answers to their inquiries, it is essential to safeguard any personal information shared during these interactions. To address this issue, LLMs such as Sati-AI employ advanced encryption and anonymization methods to secure communications. Furthermore, Sati-AI does not retain any personal information, ensuring that all interactions remain private and confidential. Nevertheless, users should remain cautious about the information they disclose and refrain from providing sensitive personal data to LLMs or other digital platforms to preserve their privacy and security.</i></Text>
    </section>
      

        <Text className="text-zinc-600"><b>This project is dedicated with respect and gratitude to all my teachers</b></Text>
     <Text className="text-zinc-600">Concept, programming and prompt engineering by <Link href="https://marlonbarrios.github.io/">Marlon Barrios Solano</Link></Text>

        <Text className="text-zinc-600"><Link href="https://marlonbarrios.github.io/mindfulness/">I teach and do coaching on mindfulness meditation for creative technologists and artists</Link></Text>

         <Text className="text-zinc-600">Powered by <Link href="https://openai.com/product/gpt-4">GPT-4/OpenAI</Link></Text>
        
           <Text className="text-zinc-600"> <Link href="https://patreon.com/user?u=84024387&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_linkv">Support my work in Patreon</Link></Text>
      </section>
    </Page>
  )
}



export default Home
