import { useState } from 'react';
import { Text, Page } from '@vercel/examples-ui';
import Link from 'next/link';
import Forgive from '../components/Forgive';
import Queerness from '../components/Queerness';
import Thickpresent from '../components/Thickpresent';


// Define an enum for the possible active components
enum ActiveComponent {
  Forgive = 'Forgive',
  Queerness = 'Queerness',
  Thickpresent = 'Thickpresent',
}

// Define a type for the button data
type ButtonData = {
  label: string;
  component: ActiveComponent;
};

function Examples() {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent | null>(null);

  // Define the button data
  const buttons: ButtonData[] = [
    { label: 'Forgiveness', component: ActiveComponent.Forgive },
    { label: 'Queerness', component: ActiveComponent.Queerness },
    { label: "'Thick Present' Meditation", component: ActiveComponent.Thickpresent },
  ];

  return (
    <Page className="flex flex-col gap-12">
      {/* ... */}
      <div>
        {buttons.map((button) => (
          <button
            key={button.component}
            onClick={() => setActiveComponent(button.component)}
            className="px-4 py-2 m-4 border border-zinc-400 rounded-xl active:bg-zinc-400 active:text-white cursor-pointer"
            aria-label={button.label}
          >
            {button.label}
          </button>
        ))}
        <Link href="/" className="px-4 py-3 m-4 border border-zinc-400 rounded-xl bg-zinc-400 text-white hover:bg-white hover:text-zinc-400">
          Back Home
        </Link>
      </div>
      {/* Display the active component */}
      {activeComponent === ActiveComponent.Forgive && <Forgive />}
      {activeComponent === ActiveComponent.Queerness && <Queerness />}
      {activeComponent === ActiveComponent.Thickpresent && <Thickpresent />}
      {/* ... */}
    </Page>
  );
}

export default Examples;
