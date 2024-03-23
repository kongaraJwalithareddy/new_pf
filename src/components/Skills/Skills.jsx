import React from "react";

import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import s from "../../data/s.json";

const SkillSection = ({ title, skills }) => {
  return (
    <div className={styles.skills}>
      <h3>{title}</h3>
      <div className={styles.skillContainer}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>

        <SkillSection title="Programming" skills={s.programming} />

        <SkillSection title="Web Technologies" skills={s.webTechnologies} />

      </div>

      <div className={styles.content}>

        <SkillSection title="Tools/ Technologies" skills={s.tools} />

        <SkillSection title="DataBase/ Cloud" skills={s.dataBase} />

      </div>

    </section>
  );
};