import Link from 'next/link';
import { useRouter } from 'next/router';
import text from '@constants/text';
import { colors } from '@constants/theme';
import { navHeaderLink, nav } from '../constants/nav';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Link href="/top/1">
        <a className="logo link">{text.APP_NAME}</a>
      </Link>
      <nav>
        {navHeaderLink.map((item) => (
          <Link key={item} href={`/${item}/1`}>
            <a
              className={`link${
                router.pathname === `/${item}/[page]` ? ' active' : ''
              }`}
            >
              {nav[item].title}
            </a>
          </Link>
        ))}
      </nav>

      <style jsx>{`
        .container {
          background-color: ${colors.primary};
          display: flex;
          padding: 3px 2px;
        }
        .logo {
          font-weight: bold;
          margin-right: 8px;
        }
        .link {
          color: ${colors.black};
          text-decoration: none;
        }
        .link.active {
          color: ${colors.white};
        }
        nav a {
          padding: 0 3px;
        }
        nav a:first-child:before {
          display: none;
        }
        nav a:before {
          content: '';
          border-left: 1px solid ${colors.black};
          height: 60%;
          display: inline-block;
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
