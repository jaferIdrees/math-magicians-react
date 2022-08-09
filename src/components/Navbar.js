import { Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quote',
    text: 'Quote',
  },
];

function Navbar() {
  return (
    <div className="navbarContainer">
      <nav>
        <ul className="navBar">
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1 className="mainTitle">Math Magicians</h1>
    </div>
  );
}

export default Navbar;
