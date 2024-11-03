"use client"
import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/router";




const navigationItems = [
  { name: 'Add question', path: '/book/questions/add' },
  { name: 'Create Slide', path: '/' },
  { name: 'Create Archive', path: '/' },
  { name: 'Finish Book', path: '/book' },  
];

const NavTop = () => {
    const router = useRouter();

    return (
        <nav className={` navbar ${ styles.navbarTop }`}>
            <div className="container">
                <ul className={ styles.navigationItems }>
                    <li>
                        <Link href="/"><a> Home </a></Link>
                    </li>
                    {navigationItems.map((el) => (
                        <li key={ el.name }>
                            <Link href={ el.path }><a className={ router.pathname === item.path ? styles.active : ''}> { el.name } </a></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export { NavTop };