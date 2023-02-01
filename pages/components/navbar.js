import Link from "next/link";
import Image from "next/image";
import Logo from "/public/ninja.jpg";
const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <Image src={Logo} alt="ninja_Logo" />
        </Link>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item">
          <Link href="/">Home</Link>
        </li>
        <li className="navbar__menu__item">
          <Link href="/about">About</Link>
        </li>
        <li className="navbar__menu__item">
          <Link href={"/ninjas"}>Ninjas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
