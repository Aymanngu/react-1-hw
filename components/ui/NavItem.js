// components/ui/NavItem.js
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Navbar.module.css';

const NavItem = ({ title, link, isActive }) => {
  return (
    <li className={classNames(styles.navbarLinks, { [styles.isLinkActive]: isActive })}>
      <Link href={link}>
        <b>01</b> {title}
      </Link>
    </li>
  );
};

export default NavItem;
