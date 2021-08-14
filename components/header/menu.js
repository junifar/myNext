import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.module.css";

const Menu = () => {
  return (
    <ul className="nav">
      <li className="scroll-to-section">Home</li>
      <li className="scroll-to-section">About</li>
    </ul>
  );
};

export default Menu;
