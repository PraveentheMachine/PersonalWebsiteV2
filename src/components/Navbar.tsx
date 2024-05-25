import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <h3>Praveen Bandarage </h3>
      </div>
      <ul className="navbar-list">
        <li className="navbar-list-link">
          <a className="navbar-list-link" href="/">
            Home
          </a>
        </li>
        {/* <li className="navbar-list-link">
          <a className="navbar-list-link" href="/about">
            About
          </a>
        </li> */}
        <li className="navbar-list-link">
          <a className="navbar-list-link" href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}
