import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span>© {year} - Малышев Михаил</span>
    </footer>
  )
}

export default Footer
