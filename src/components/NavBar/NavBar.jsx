import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const imgMarolio = "https://www.marolio.com.ar/sites/all/themes/theme1043/logo.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgMarolio" src={imgMarolio} alt="" />
            </Link>

            <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/2"}> Placas de Video </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/categoria/3"}> Fuentes Gamers</NavLink>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar