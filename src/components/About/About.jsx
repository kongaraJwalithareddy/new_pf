import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import resume from "./resume.pdf"
const handlePreviewResume = () => {
  window.open(resume, "_blank");
};

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       { /*<img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
      />*/}

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/*<p>
              I'm a dedicated learner, blending theory with hands-on practice to excel in my career. With over 2 years of dynamic experience in Software Development, I stay updated with emerging technologies to create innovative applications. I'm passionate about crafting scalable, maintainable code and thrive on overcoming challenges. Ready to embrace new technologies, I'm adept at collaborative problem-solving, making me well-prepared for any task.
            </p>*/}
            <p >
            I am a highly motivated and detail-oriented Software Engineer experienced in Full Stack Development and data management. My passion lies in creating innovative solutions that make a difference. With expertise in a diverse range of programming languages, frameworks, and technologies, I adapt seamlessly to new challenges and projects.<br></br><br></br>

            I thrive in collaborative, cross-functional teams and excel at meeting deadlines while delivering impactful solutions. Committed to producing high-quality code, I leverage best practices in software engineering and embrace fast-paced environments where creativity and problem-solving are essential.<br></br><br></br>

            Let’s connect and explore how we can work together to build something remarkable!
            </p>

            

          </li>

          {/*<ul className={styles.aboutDetails}>
            <li>Location: California, US</li>
            <li>Age: 23</li>
            <li>Gender: Female</li>
          </ul>*/}

          <button className={styles.resumeButton} onClick={handlePreviewResume}>Preview Resume </button>

        </ul>
      </div>
    </section>
  );
};
