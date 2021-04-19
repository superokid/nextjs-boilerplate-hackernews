import Head from 'next/head';
import { colors } from '@constants/theme';
import text from '@constants/text';
import Navbar from './Navbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>{text.APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>

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
