import { useState } from 'react';
import Image from 'next/image';
import styles from '../components/Navbar.module.scss';
import logosq from '../assets/logosq.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image 
          src={logosq} 
          alt="logo" 
          fill
          className={styles.logoImage} 
        />
      </div>
      <button className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </button>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <a href="#working-example">Working Example</a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners">GitHub</a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners">Docs</a>
      </div>
    </nav>
  );
}
