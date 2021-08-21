import { Fragment } from "react";
import {
  AppBar,
  CssBaseline,
  GlobalStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Nav from "./nav";

const Navbar = () => {
  return (
    <Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <AppBar
        position="static"
        // color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}>
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            youOkay.com
          </Typography>
          <Nav />
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
