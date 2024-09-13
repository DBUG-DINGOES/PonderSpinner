import { useState } from 'react';
import Image from 'next/image';
import styles from '../components/Navbar.module.scss';
import logoLine from '../assets/logoLineDark.svg';
import logosq from '../assets/logosq.png';
import downloadIcon from '../assets/downloadIcon.svg'

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
        <a href="https://github.com/DBUG-DINGOES/customised-spinners" className={styles.downloadLink}>
          Download
          <Image 
            src={downloadIcon} 
            alt="Download Icon" 
            className={styles.icon} 
            width={16} 
            height={16} 
          />
        </a>
        <a href="https://github.com/DBUG-DINGOES/customised-spinners">Docs</a>

        {isOpen && (
          <div className={styles.logoLineContainer}>
            <Image 
              src={logoLine} 
              alt="logoLine" 
              fill
              className={styles.logoImage} 
            />
          </div>
        )}
      </div>
      <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}></div>
    </nav>
  );
}
