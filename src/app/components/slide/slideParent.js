import styles from "./index.module.css";

const SlideParent = (props) => {
    // console.log(document.getElementById("slideEditor").innerHTML = "<p>welcome");
    // document.getElementById("slideEditor").innerHTML = "<p>welcome</p>";

    return (
        <div className={`${styles.slideParent} ${ props.showElement ? "" : "d-none" }`}>
            <div className={styles.slideInfo} dangerouslySetInnerHTML={{ __html: props.question }} />
            <div className={styles.slideTitle } id="slideEditor" ></div>
            <div className={styles.slideMain}>
                <ul className={ styles.options }>
                    <li> { props.optio1 } </li>
                    <li> { props.optio2 } </li>
                    <li> { props.optio3 } </li>
                    <li> { props.optio4 } </li>
                </ul>
                <div className={styles.separatedLine}></div>
                <div className={ styles.solution }> solution </div>
            </div>
        </div>
    )
}

export { SlideParent };