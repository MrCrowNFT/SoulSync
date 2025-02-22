import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6C9BCF] p-6 text-[#333333] font-mono h-auto mt-20">
      <div className="m-3 space-y-6">
        {/*Grid */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          <div className="flex flex-col justify-center items-center gap-1">
            <h3 className="text-[hsl(0,0%,10%)]">About</h3>
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
            <h3 className="text-[hsl(0,0%,10%)]">Privacy</h3>
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
            <h3 className="text-[hsl(0,0%,10%)]">Terms of service</h3>
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
            <h3 className="text-[hsl(0,0%,10%)]">Crisis resources</h3>
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
        {/*Social media */}
        <div className="flex items-center justify-normal space-x-5">
          <h2>Follow Us!</h2>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <Instagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <Twitter />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <Facebook />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <Linkedin />
          </a>
        </div>
        {/*Logo and trademark */}
        <div className="flex justify-between items-center border-t pt-4">
          <img loading="lazy" src="" alt="" className="h-12 w-12" />
          <p>© SoulSync 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
