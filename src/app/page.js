import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function NavigationBox(props) {
  return (
    <div className={ styles.navigationBox }>
        <Link href={ props.path }>
          <a> { props.name } </a>
        </Link>
      </div>
  )
}

const navigationItems = [
  { name: 'Add question', path: '/book/questions/add' },
  { name: 'Create Slide', path: '/' },
  { name: 'Create Archive', path: '/' },
  { name: 'Finish Book', path: '/' },  
];


export default function Home() {

  return (
    <div className={styles.page}>
      <div className="row">
        {navigationItems.map((el) => (
          <div className="col-md-6" key={ el }>
            <NavigationBox name={ el.name } path={ el.path } />
          </div>
        ))}
      </div>
    </div>
  );
}
