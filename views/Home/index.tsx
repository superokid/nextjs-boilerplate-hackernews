import Head from 'next/head';
import Navbar from './Navbar';

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Hacker News</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar />

    <main>main</main>

    <footer>footer</footer>

    <style jsx>{`
      .container {
        padding: 0 0.5rem;
      }

      main {
        padding: 0 0.5rem;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default Home;
