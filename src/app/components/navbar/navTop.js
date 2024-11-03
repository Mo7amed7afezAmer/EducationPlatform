import styles from "./index.module.css";
import Link from "next/link";

const navigationItems = [
  { name: 'question', path: '/book/questions/add' },
  { name: 'Slide', path: '/' },
  { name: 'Archive', path: '/' },
  { name: 'Book', path: '/book' },
  { name: 'Contact', path: '/' }, 
];

const NavTop = () => {

    return (
        <nav className={`${ styles.navbarTop }`}>
            <div className="container">
                <ul className={ styles.navigationItems }>
                    <li key="home">
                        <Link href="/"> Home </Link>
                    </li>
                    {navigationItems.map((el) => (
                        <li key={ el.name + 123 }>
                            <Link href={ el.path }> { el.name } </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export { NavTop };