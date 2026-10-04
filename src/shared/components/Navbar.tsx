import { Link } from "react-router-dom";
import type { NavItem } from "../types/navbar";

const navItem: NavItem[] = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
];

const Navbar = () => {
  return (
    <div className="bg-sky-950 text-white font-medium">
      {/* nav */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1>LOGO</h1>
        <ul className="flex justify-between items-center gap-6 p-6">
          {navItem.map((item) => (
            <li>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <h1>Login</h1>
      </nav>
    </div>
  );
};

export default Navbar;
