import 'tailwindcss/tailwind.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Head>
        <meta property="og:title" content="The eye remedy" />
        <meta property="og:image" content="" />
      </Head>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;