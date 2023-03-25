import { Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import Link from 'next/link'
import Image from 'next/image'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
        <Text variant="h2" className="mb-6">
          May you be free from suffering...
        </Text>
        <Text className="text-zinc-600">
          Sati-AI is a Vipassana meditation assistant. The intention of this tool is to help you cultivate mindfulness and develop greater peace and insight in your life. It cannot replace a trained human teacher or a mental help professional. While Sati-AI can help summarise and simplify important insights, what you're looking for is already within your own, full experience.
        </Text>
        <Text className="text-zinc-600">
          This tool can serve you best if you approach any dialogue with a healthy sense of humour.
        </Text>
        <Text className="text-zinc-600">
          While Buddhism has many traditions, Sati-AI's training is solely in Theravada. You can start a conversation by asking questions about your practice, or by enquiring into any verses from the Pali Canon, particularly the Dhammapada and Theragatha.
        </Text>
        <div className="lg:w-full my-8">
          <Chat />
          <Text className="text-zinc-600"><i>If any statement is incomplete, please type <b>continue</b>, and Sati-AI will expand or clarify.</i></Text>
        </div>
      </section>
      <div className="text-center">
        <Link href="/about" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Learn More
        </Link>
      </div>
      <div className="text-center">
        <Link href="/examples" className="px-8 py-2 mx-auto my-4 border border-zinc-400 rounded-xl hover:bg-zinc-400 hover:text-white">
          Examples
        </Link>
      </div>
      <div className="items-center mx-auto w-80">
        <Image src="/images/logo.png" alt="Sati-AI" width={500} height={500} />
      </div>
    </Page>
  )
}

export default Home
