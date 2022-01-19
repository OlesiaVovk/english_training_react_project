import { Link } from "react-router-dom";
import img from "../assets/images/favicon.png";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/home">
          <img src={img} alt="logo" className="logo" />
        </Link>
        <nav className="links">
          <h3>
            <Link to="/game">GAME</Link>
          </h3>
          <h3>
            <Link to="/">HOME</Link>
          </h3>
        </nav>
      </div>
    </div>
  );
}

export default Header;
