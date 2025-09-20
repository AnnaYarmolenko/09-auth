import css from './Header.module.css';
import Link from 'next/link';
import TagsMenu from '../TagsMenu/TagsMenu';
import AuthNavigation from '../AuthNavigation/AuthNavigation';


export const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
         
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu />
          </li>
           <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
           <li>
            <AuthNavigation />
          </li>
        </ul>
      </nav>
    </header>
  );
};
