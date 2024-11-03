import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

function NavigationBox(props) {
  return (
    <div className={ styles.navigationBox }>
        { props.title }
      </div>
  )
}

const navigationData = ["Add question", "Create Slide", "Create Archive", "Finish Book"];

export default function Home() {
  const [navData, setNavData] = useState(navigationData);

  return (
    <div className={styles.page}>
      <div className="row">
        {navData.map((el) => (
          <div className="col-md-6" key={ el }>
            <NavigationBox title={ el } />
          </div>
        ))}
      </div>
    </div>
  );
}
