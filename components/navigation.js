import Link from 'next/link'
import styles from '../public/css/styles.module.css'

const Navigation = () => {
    return (
        <nav className={`${styles.navCustom} navbar navbar-expand-lg navbar-light nav`}>
            <div className="container-fluid">
                <Link href="/" className={`${styles.navLogoCustom} navbar-brand`}>
                    FoodGo
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <Link href="/about" className={`${styles.ulCustom} nav-link`}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/services" className="nav-link">
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* <div>
                    <form class="d-flex">

                        <Link href="/register" className={`${styles.btnCustom3} btn btn-outline-success me-2`}>
                            Registro
                        </Link>

                        <Link href="/login" className={`${styles.btnCustom3} btn btn-outline-secondary`}>
                            Login
                        </Link>
                    </form>
                </div> */}
            </div>

        </nav>
    )
}

export default Navigation;