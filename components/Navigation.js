import { Link } from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>NetNinja</h1>
      </div>
      <ul className="menu">
        <li className="menu__item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className="menu__item">
          <Link href="/ninjas">
            <a>NinjasList</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
