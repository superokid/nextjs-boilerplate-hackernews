import Head from 'next/head';
import { colors } from '@constants/theme';
import Navbar from './Navbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Hacker News Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <footer>footer</footer>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        main {
          background-color: ${colors.secondary};
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (min-width: 768px) {
          .container {
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
