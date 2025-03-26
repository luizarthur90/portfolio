import './menu.css';
import { Link } from "react-scroll";


function Menu() {
    return (
        <header className='menu'>
            <ul>
                <li>
                    <Link to="home" smooth={true} duration={500} className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="case-studies" smooth={true} duration={500} className="nav-link">Projects</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className="nav-link">Contact</Link>
                </li>
            </ul>
        </header >
    );
}

export default Menu;