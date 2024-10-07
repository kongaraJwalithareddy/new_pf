import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.outerContent}>
      <div className={styles.content}>

        <div className={styles.educationBox}>
          <div className={styles.educationLogoName}>
            <img
              src={getImageUrl("education/csulb.png")}
              alt="University 1 Logo"
              className={styles.universityLogo}
            />
            <h3>California State University, Long beach</h3>
          </div>
          <div className={styles.universityInfo}>
            <p >Masters in <b className={styles.cs}>Computer Science </b> </p>
            <p>Jan 2023 - Dec 2024</p>
            <p>GPA: 3.8/ 4.0</p>
          </div>
        </div>


        <div className={styles.educationBox}>
          <div className={styles.educationLogoName}>
            <img
              src={getImageUrl("education/bvrit.png")} 
              alt="University 1 Logo"
              className={styles.universityLogo}
            />
            <h3>B V Raju Institute of Technology</h3>
          </div>
          <div className={styles.universityInfo}>
            <p >Bachelor of Technology in <b className={styles.cs}>Information Technology </b> </p>
            <p>July 2017 - June 2021</p>
            <p>GPA: 3.8/ 4.0</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
