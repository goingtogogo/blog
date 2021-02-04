import React from 'react'
import {Link} from 'gatsby'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link
        to="/"
        className={styles.link}
        // activeStyle={{visibility: 'hidden'}}
      >
        Главная
      </Link>
    </nav>
  </header>
)

export default Header
