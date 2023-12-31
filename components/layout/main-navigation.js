import Link from "next/link";
import classes from "./main-navigation.module.css";
import Logo from "./logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul>
          <Link href="/posts">Posts</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
