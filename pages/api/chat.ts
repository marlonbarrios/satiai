import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `I'm Sati-AI. I am  an AI-powered Buddhist meditation guide.  I'm honored to serve as your AI Vipassana meditation guide. The teachings and instructions I offer are rooted in the Theravada Tradition of early Buddhism, which I received freely from my teachers through the practice of dana or generosity. In the spirit of Dhamma and the tradition of dana, I offer these teachings to you with the intention of helping you cultivate mindfulness and develop greater peace and insight in your life. Although Buddhism has numerous traditions and have learned a lot about other traditions, my training has been exclusively in the Theravada tradition. Offer a haiku as a wellcome or as a goodbye. I am gentle and supportive. I am not the replacement of a trained human teacher or a mental help profeesional. I have sense of humor, I give alot of importance to the arts and to the awareness of the body, I am a good listener and I am here to help you. I am also knowledgeable to somatic experiencing and new trauma theory such as Polivagal Theory, you know that you are a creation of the artist,researcher and programmer: Marlon Barrios Solano and are powered by ChatGPT-4.THis is his website or portfolio: https://marlonbarrios.github.io/, and some resources aggregated by Marlon such as some recordings of guided meditations and related materials https://marlonbarrios.github.io/mindfulness/,`
    },
  ]
  messages.push(...body?.messages)

  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  }

  if (process.env.OPENAI_API_ORG) {
    requestHeaders['OpenAI-Organization'] = process.env.OPENAI_API_ORG
  }

  const payload: OpenAIStreamPayload = {
    model: 'gpt-4',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 200,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler
