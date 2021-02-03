import React from 'react'
import {Link} from 'gatsby'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Link to="/about" className={styles.link}>
          О сайте
        </Link>
        <Link to="/now" className={styles.link}>
          /now
        </Link>
      </div>
      <div className={styles.right}>
        <span className={styles.label}>Связаться:</span>
        <a className={styles.link} href="mailto:iam@gngtgg.space">
          iam@gngtgg.space
        </a>
      </div>
    </footer>
  )
}

export default Footer
