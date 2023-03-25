import { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import Link from 'next/link'
import Forgive from '../components/Forgive';

function Examples() {
  const [activeComponent, setActiveComponent] = useState('');

  // function to handle button click and set the active component state
  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-3 text-zinc-600">
        <Text variant="h1" className="mb-6">
          Learn By Example
        </Text>
        <Text>
          On this page, we provide various example conversations, conducted during testing, to help you learn what to expect and how to think about prompting Sati-AI in order to better understand yourself and your own practice.
        </Text>
        <div>
            <button 
                onClick={() => handleClick('Forgive')}
                className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
                Forgiveness
            </button>
            <button 
                onClick={() => handleClick('Meditate')}
                className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white"
            >
                Meditation
            </button>
            <Link href="/" className="px-4 py-3 m-4 border border-zinc-400 rounded-xl bg-zinc-400 text-white hover:bg-white hover:text-zinc-400">
                Back Home
            </Link>
        </div>
        {/* display the active component and hide all others */}
        {activeComponent === 'Forgive' && <Forgive />}
      </section>
    </Page>
  );
}

export default Examples;
