import { CartContextProvider } from '@/components/CartContext';
import { Helmet } from 'react-helmet';

const metadata = {
  title: 'Root Bangladesh',
  description: 'Root Bangladesh',
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            background-color: #eee;
            padding: 0;
            margin: 0;
            font-family: 'Poppins', sans-serif;
          }
        `}</style>
        <img src="/2.jpg" alt="Logo" />
      </Helmet>
     
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
