import logo from '../../assets/Graviti.png'
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <img src={logo} alt="Logo"></img>
      </div>
    </nav>
  );
}

export default Navbar;
