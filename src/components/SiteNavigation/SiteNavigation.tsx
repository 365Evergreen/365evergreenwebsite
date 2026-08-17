import { Link } from 'react-router-dom';

import navigation from './navigation.json';
import type { NavigationItem } from './Navigation.types';

import styles from './SiteNavigation.module.css';

export const navItems = navigation.items as NavigationItem[];

export function buildNavigationTree() {
  return navItems
    .filter(item => !item.parent)
    .map(item => ({
      ...item,
      children: navItems.filter(
        child => child.parent === item.slug
      ),
    }));
}

export default function SiteNavigation() {
  const navigationTree = buildNavigationTree();

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {navigationTree.map(item => (
          <li
            key={item.id}
            className={styles.menuItem}
          >
            <Link
              to={
                item.slug === 'home'
                  ? '/'
                  : `/${item.slug}`
              }
            >
              {item.label}
            </Link>

            {item.children.length > 0 && (
              <ul className={styles.submenu}>
                {item.children.map(child => (
                  <li key={child.id}>
                    <Link
                      to={`/${item.slug}/${child.slug}`}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}