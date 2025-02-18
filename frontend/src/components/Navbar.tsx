import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 h-auto bg-[#6C9BCF] p-6 text-[#333333] font-mono">
      <div className="flex items-center justify-between">
        {/*Logo */}
        <div className="flex items-center gap-10">
          <img className="logo" loading="lazy" src="" alt="logo" />
          {/*Nav */}
          <nav>
            <ul className="flex gap-3">
              <li>
                <Link to="" className="custom-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Chatbot
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/*Login Signup */}
        <div className="flex justify-end space-x-4">
          <Link to="" className="custom-link">
            Login
          </Link>
          <Link to="" className="custom-link">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
