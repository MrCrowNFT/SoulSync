import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-auto bg-[#6C9BCF] p-6 text-[#333333] font-mono">
      <div className="flex items-center justify-between">
        {/*Logo */}
        <div className="flex items-center gap-10 ml-5">
          <img className="logo" loading="lazy" src="" alt="logo" />
          {/*Nav */}
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/home" className="custom-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="custom-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/chat" className="custom-link">
                  Chatbot
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/*Login Signup */}
        <div className="flex justify-end space-x-4 gap-6 mr-5">
          <DarkModeToggle/>
          <Link to="/login" className="custom-link">
            Login
          </Link>
          <Link to="/signup" className="custom-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
