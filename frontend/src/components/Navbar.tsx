import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
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
        {/*Social Media */}
        <div></div>
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
