import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-sky-950 text-white font-medium">
      {/* nav */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1>LOGO</h1>
        <ul className="flex justify-between items-center gap-6 p-6">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <h1>Login</h1>
      </nav>
    </div>
  );
};

export default Navbar;
