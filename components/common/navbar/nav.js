import { Link } from "@material-ui/core";
import { Fragment } from "react";

const Nav = () => {
  return (
    <Fragment>
      <nav>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="false">
          Features
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="false">
          {" "}
          Enterprise
        </Link>
        <Link
          variant="button"
          color="inherit"
          href="#"
          sx={{ my: 1, mx: 1.5 }}
          underline="false">
          {" "}
          Support
        </Link>
      </nav>
    </Fragment>
  );
};

export default Nav;
