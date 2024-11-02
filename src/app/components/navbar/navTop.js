import styles from "./index.module.css";

const NavTop = () => {
    return (
        <nav className={` navbar container ${ styles.test }`}>
            <div className={ `d-md-flex d-block ${styles.navbarTopParent}` }>
                <div className={ `${styles.navbarLogo} mb-1` }>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <form className="navbar-search d-flex w-md-100" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>
                <div className="navbar-info">
                    <ul className="d-md-flex d-none navbar-nav">
                        <li className="navbar-info-item">
                            <a href="#">cart</a>
                        </li>
                        <li className="navbar-info-item">
                            <a href="#">notify</a>
                        </li>
                        <li className="navbar-info-item">
                            <a href="#">login</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}

export { NavTop };