// import { Fragment } from "react";
import "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <Menu />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
