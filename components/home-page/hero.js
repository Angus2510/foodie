import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile-pic.jpg"
          alt="Profile pic"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I'm Angus</h1>
      <p>food for thought</p>
    </section>
  );
}

export default Hero;
