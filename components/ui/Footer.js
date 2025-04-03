"use client";

import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';  
import Link from 'next/link';
import SocialMediaItem from './SocialMediaItem'; 

export const Footer = () => {
  const path = usePathname().split('?')[0]; 

  return (
    <footer className={path !== "/" ? styles.footer : styles.hidden}>
      <div className={styles.footerDescription}>
        <h3>Galactica</h3>
        <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
        <p>&copy; 2024 Galactica. All rights reserved.</p>
      </div>

      <div className={styles.pages}>
        <h3>Pages</h3>
        <ul>
          <li>
            <Link href="/about_us">About Us</Link>
          </li>
          <li>
            <Link href="/destination">Destinations</Link>
          </li>
          <li>
            <Link href="/nasa_collaboration">NASA Collaboration</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerLinks}>
        <h3>Follow us</h3>
        <ul className={styles.footerList}>
          <SocialMediaItem url="https://facebook.com" title="Facebook" icon="facebook.png" />
          <SocialMediaItem url="https://instagram.com" title="Instagram" icon="instagram.png" />
          <SocialMediaItem url="https://tiktok.com" title="Tiktok" icon="tik-tok.png" />
          <SocialMediaItem url="https://google.com" title="Google" icon="google.png" />
        </ul>
      </div>
    </footer>
  );
};
