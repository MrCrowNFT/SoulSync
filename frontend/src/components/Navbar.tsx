import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky w-auto h-5 bg-[#6C9BCF] p-6 text-[#333333] font-mono">
      <div>
        {/*Logo */}
        <img className="logo" loading="lazy" src="" alt="logo" />
        {/*Nav */}
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="">Dashboard</Link>
            </li>
            <li>
              <Link to="">Chatbot</Link>
            </li>
          </ul>
        </nav>
        {/*Login Signup */}
        <div>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
