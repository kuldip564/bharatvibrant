import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

function Navbar() {
  const {loginc,setLoginc}= useContext(AuthContext)
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLoginLogout = async () => {
    try {
      const response = await fetch('http://localhost:2000/user/logout', {
        method: 'GET',
        credentials: 'include', 
      });
  
      if (response.ok) {
        setLoginc(false);
        console.log('Logged out successfully');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };
  

  return (
    <header className="sticky top-0 z-50 w-full h-20 bg-blue-50 shadow-md mb-10 font-['Roboto']">
      <nav className="max-w-7xl mx-auto h-full flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-900 capitalize cursor-pointer hover:text-blue-700 transition">
          <Link to="/">Bharat Vibrant</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-blue-800 text-base font-medium capitalize">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/course" className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Course
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition duration-200 cursor-pointer">
              About
            </Link>
          </li>
          {loginc ? (
            <li
              onClick={handleLoginLogout}
              className="hover:text-red-600 transition duration-200 cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login" className="hover:text-green-600 transition duration-200 cursor-pointer">
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-900"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-blue-100 px-6 pb-4 space-y-3 text-blue-800 text-base font-medium capitalize">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/course" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Course
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-200 cursor-pointer">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-200 cursor-pointer">
              About
            </Link>
          </li>
          {loginc ? (
            <li
              onClick={handleLoginLogout}
              className="hover:text-red-600 transition duration-200 cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="hover:text-green-600 transition duration-200 cursor-pointer">
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
