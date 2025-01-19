import styles from "./page.module.css";
import Link from "next/link";

function NavigationBox(props) {
  return (
    <div className={ styles.navigationBox }>
        <Link href={ props.path }> { props.name } </Link>
      </div>
  )
}

const navigationItems = [
  { name: 'Add question', path: '/book/questions/add' },
  { name: 'Create Slide', path: '/slide' },
  { name: 'Create Archive', path: '/' },
  { name: 'Book builder', path: '/book_builder' },
];


export default function Home() {

  return (
    <div className={`container ${ styles.page }`}>
      <div className="row">
        {navigationItems.map((el) => (
          <div className="col-md-6 mb-3" key={ el.name }>
            <NavigationBox name={ el.name } path={ el.path } />
          </div>
        ))}
      </div>
    </div>
  );
}
