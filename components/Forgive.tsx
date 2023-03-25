import { Text, Page } from '@vercel/examples-ui'
const ForgivenessData: ForgivenessData = require('../data/forgiveness.json')

type ForgivenessItem = {
    name: string;
    value: string;
}

type ForgivenessData = {
    [key: string]: ForgivenessItem;
}

const Forgive = () => {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3">
      {Object.keys(ForgivenessData).map((key: string) => {
          const item = ForgivenessData[key];
          // Replace "\n" characters with the HTML <br> tag
          const formattedValue = item.value.replace(/\n/g, '<br>');
          switch (item.name) {
            case 'You': {
                return (
                    <div key={key} className="border border-indigo-200 rounded-xl p-4 my-4 w-full">
                    <Text className='mb-2 text-right text-indigo-600'>
                        <b>{item.name}</b>
                    </Text>
                    <pre className='text-right whitespace-pre-line'>
                        {item.value}
                    </pre>
                    </div>
                )
            }
            case 'Edit': {
                return (
                    <div key={key}>
                    <Text className='text-center text-red-500 text-sm'>
                        <i>{item.value}</i>
                    </Text>
                    </div>
                )
            }
            default: {
                return (
                    <div key={key} className="border border-green-200 rounded-xl p-4 my-4 w-full">
                    <Text className='mb-2 text-green-400'>
                        <b>{item.name}</b>
                    </Text>
                    <pre className='whitespace-pre-line'>
                        {item.value}
                    </pre>
                    </div>
                )
            }}
        })}
      </section>
    </Page>
  )
}

export default Forgive
