import Navbar from './navbar'
import Footer from './footer'
import styles from './style.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Navbar title="abc" name="zzz" >
        <ul className={styles.menu}>
          <li className={styles.menu__item}>menu 1</li>
          <li className={styles.menu__item}>menu 2</li>
          <li className={styles.menu__item}>menu 3</li>
        </ul>
      </Navbar>
      <main>{children}</main>
      <Footer />
    </>
  )
}