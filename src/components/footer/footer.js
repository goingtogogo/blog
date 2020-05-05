import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        © 2018 <br /> Built with ⚛️
        <a href="https://gatsbyjs.org/" alt="GatsbyJS">
          {' '}
          Gatsby
        </a>
        . Delivered with{' '}
        <a href="https://gatsbyjs.org/" alt="GatsbyJS">
          Netlify
        </a>
        💫
      </div>
    </footer>
  )
}

export default Footer
