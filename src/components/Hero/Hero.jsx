/* eslint-disable react/no-unescaped-entities */

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Santosh </h1>
        <p className={styles.description}>I'm a full stack developer with 1 year of experience using React and Nodejs. Reach out to learn more! </p>
        <a href="mailto:santoshjain.id@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
