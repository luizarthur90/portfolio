import './menu.css';
import { Link } from "react-scroll";


function Menu() {
    return (
        <div className='global-menu'>
            <ul style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'flex-start',
                justifyContent: 'flex-start',
                gap: 24, listStyleType: 'none'
            }}>
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
        </div>
    );
}

export default Menu;