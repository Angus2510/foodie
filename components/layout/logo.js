import classes from "./logo.module.css";
import Image from "next/image";

function Logo() {
  return (
    <div className={classes.logo}>
      <Image
        src="/images/site/foodie-logo.png"
        alt="foodie logo"
        width={150}
        height={150}
      />
    </div>
  );
}

export default Logo;
