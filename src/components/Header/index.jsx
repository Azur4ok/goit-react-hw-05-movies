import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? styles.active : styles.movies_link
          }
        >
          HOME
        </NavLink>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            isActive ? styles.active : styles.movies_link
          }
        >
          MOVIES
        </NavLink>
      </nav>
    </header>
  );
};

