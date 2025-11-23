import "./Nav.scss";

const Nav = () => (
  <header className="nav-header">
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav__logo">
        <img src="/logo.png" alt="Jobs4U logo" />
        <span className="nav__brand">Jobs4U</span>
      </div>
      <ul className="nav__links">
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">How It Works</a>
        </li>
        <li>
          <a href="#">Find Jobs</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <div className="nav__actions">
        <button className="nav__login">
          Login <span className="arrow">→</span>
        </button>
      </div>
    </nav>
  </header>
);

export default Nav;
