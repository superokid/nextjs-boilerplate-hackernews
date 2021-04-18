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
          background-color: rgb(255, 102, 0);
          display: flex;
        }
        .logo {
          font-weight: bold;
        }
        .link {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
