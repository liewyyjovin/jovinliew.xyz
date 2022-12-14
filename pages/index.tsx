import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jovin Liew</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello I&apos;m Jovin Liew ð
        </h1>
        <Image alt="Photo of Cheri and Jovin" className={styles.photo} src='/profile.png' height={240} width={192}/>
        <p className={styles.description}>
          I&apos;m very fortunate to have a loving <a className={styles.link} href="https://www.instagram.com/cheritng/?hl=en">partner</a> in my life â she is the anchor and guide that makes me a better person, and I am grateful for her. We currently live in <a className={styles.link} href="https://en.wikipedia.org/wiki/Singapore">Singapore</a>.
          <br></br><br></br>
          I believe in following my curiosities. I will forge my own path by trying and repeatedly failing at the many things that pique my interest.
          <br></br><br></br>
          I&apos;m also kind of a nerd â here are some <a className={styles.link} href="https://oku.club/user/jovin">books</a> Iâve read.
          <br></br><br></br>
          I currently work as the co-founder & lead the growth team at <a className={styles.link} href="https://www.mobbin.com">Mobbin</a>. We are on a mission to inspire & empower the world to design better digital experiences.
          <br></br><br></br>
          You can contact me via <a className={styles.link} href="https://twitter.com/jovliew">Twitter</a> or <a className={styles.link} href="mailto:jovin@mobbin.com">Email</a>.
        </p>
   
      </main>
 
    </div>
  )
}
