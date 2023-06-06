import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: '/quote', text: 'Quote' },
  { path: '/calculate', text: 'Calculate' },
];
const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <ul className="navigation">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
