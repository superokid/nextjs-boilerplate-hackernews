import { colors } from '@constants/theme';
import Link from 'next/link';
import { navArr, nav } from '../constants/nav';

const Navbar = () => {
  return (
    <div className="container">
      <Link href="/top/1">
        <a className="logo link">Hacker News Next</a>
      </Link>
      <nav>
        {navArr.map((item) => (
          <Link key={item} href={`/${item}/1`}>
            <a className="link">{nav[item].title}</a>
          </Link>
        ))}
      </nav>

      <style jsx>{`
        .container {
          background-color: ${colors.primary};
          display: flex;
        }
        .logo {
          font-weight: bold;
        }
        .link {
          color: ${colors.black};
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
