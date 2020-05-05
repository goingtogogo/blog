import React from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.svg'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.header__container}>
      <Link to="/" className={styles.nav__link}>
        <img src={logo} alt="logo" className={styles.nav__logo} />
      </Link>
      <nav className={styles.nav}>
        <span className={styles.nav__link_wrapper}>
          <Link to="/" className={styles.nav__link}>
            главная
          </Link>
        </span>
        <span className={styles.nav__link_wrapper}>
          <Link to="/about" className={styles.nav__link}>
            контакты
          </Link>
        </span>
      </nav>
    </div>
  </header>
)

export default Header
