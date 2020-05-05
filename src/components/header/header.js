import React from 'react'
import {Link} from 'gatsby'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <nav>
      <Link
        to="/"
        className={styles.backlink}
        activeStyle={{visibility: 'hidden'}}
      >
        ←
      </Link>
    </nav>
  </header>
)

export default Header
