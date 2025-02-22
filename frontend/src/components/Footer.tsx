import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6C9BCF] dark:bg-gray-900 p-6 text-[#333333] dark:text-gray-100 font-mono h-auto mt-20 transition-colors duration-300">
      <div className="m-3 space-y-6">
        {/* Grid */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-[hsl(0,0%,10%)] dark:text-gray-100">About</h3>
            <ul>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-[hsl(0,0%,10%)] dark:text-gray-100">Privacy</h3>
            <ul>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-[hsl(0,0%,10%)] dark:text-gray-100">Terms of service</h3>
            <ul>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-[hsl(0,0%,10%)] dark:text-gray-100">Crisis resources</h3>
            <ul>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
              <li>
                <Link to="" className="custom-link">
                  Random
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media */}
        <div className="flex items-center justify-normal space-x-5">
          <h2 className="my-auto self-center text-[hsl(0,0%,10%)] dark:text-gray-100">Follow Us!</h2>
          <a href="#" target="_blank" rel="noreferrer">
            <Instagram className="social-media-img text-[hsl(0,0%,10%)] dark:text-gray-100" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Twitter className="social-media-img text-[hsl(0,0%,10%)] dark:text-gray-100" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Facebook className="social-media-img text-[hsl(0,0%,10%)] dark:text-gray-100" />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Linkedin className="social-media-img text-[hsl(0,0%,10%)] dark:text-gray-100" />
          </a>
        </div>

        {/* Logo and trademark */}
        <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4">
          <img loading="lazy" src="" alt="" className="h-12 w-12" />
          <p className="text-[hsl(0,0%,10%)] dark:text-gray-100">© SoulSync 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
