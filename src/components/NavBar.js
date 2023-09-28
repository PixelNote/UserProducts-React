import User from './User';
import { Link } from 'react-router-dom';
import './NavBar.css';


export default function NavBar(){

  return (
    <nav className="navbar">
      <User />
      <ul>
        <li>
          <Link className="navbar-links" to={"/"}>
            INICIO
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to={"/cart"}>
            CARRITO
          </Link>
        </li>
      </ul>
    </nav>
  );
}