import React from "react";

import styles from "./Intro.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jwalitha</h1>
        {/*<p className={styles.description}>
          Graduate student at California State University, Long beach
        </p>*/}
        <p className={styles.description}>
          Software Engineer
        </p>
        <div>

          <a href="mailto:jwalitha.rk@gmail.com" target="_blank">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>

          <a href="https://www.linkedin.com/in/jwalitha-reddy/" target="_blank">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
          </a>

          <a href="https://github.com/kongaraJwalithareddy" target="_blank">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>

        </div>
      </div>
      <img
        // src={getImageUrl("intro/jwalitha.png")}
        src={getImageUrl("intro/girl.png")}
        alt="Intro image of me"
        className={styles.introImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
