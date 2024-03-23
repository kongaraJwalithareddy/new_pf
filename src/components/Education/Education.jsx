import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
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
            <p>2023 Jan - 2024 Dec</p>
            <p>GPA: 3.83/ 4.0</p>
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
            <p>2017 July - 2021 June</p>
            <p>GPA: 9.3/ 10.0</p>
          </div>
        </div>
      </div>
    </section>
  );
};
