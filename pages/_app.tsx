import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import Home from './index';




import '@vercel/examples-ui/globals.css';


function App({ Component, pageProps }: AppProps) {
  return (
   
    <Home>
       
      <Component {...pageProps} />
      <Analytics />
    </Home>
  );
}

export default App;
