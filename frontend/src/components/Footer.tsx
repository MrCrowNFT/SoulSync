const Footer = () => {
  return (
    <footer className="bg-[#6C9BCF] p-6 text-[#333333] font-mono">
      <div className="m-3">
        {/*Grid */}
        <div className="grid-cols-4 gap-4">
          <div>
            <h3 className="text-[hsl(0,0%,15%)]">About</h3>
            <ul>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[hsl(0,0%,15%)]">Privacy</h3>
            <ul>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Terms of service</h3>
            <ul>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Crisis resources</h3>
            <ul>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
              <li>
                <a href="custom-a">Random</a>
              </li>
            </ul>
          </div>
        </div>
        {/*Social media */}
        <div>
          <h2>Follow Us!</h2>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <img loading="lazy" src="" alt="" className="h-12 w-12" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <img loading="lazy" src="" alt="" className="h-12 w-12" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <img loading="lazy" src="" alt="" className="h-12 w-12" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="social-media-img"
          >
            <img loading="lazy" src="" alt="" className="h-12 w-12" />
          </a>
        </div>
        {/*Logo and trademark */}
        <div>
          <img loading="lazy" src="" alt="" className="h-12 w-12" />
          <p>© SoulSync 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
