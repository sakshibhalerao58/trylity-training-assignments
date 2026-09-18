import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container navbar">
        <Link to="/" className="logo">
          Vite React App
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;