import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import Mcard from "../../components/common/m/card";
import MNavbar from "../../components/common/m/navbar";

const GridList = (props) => {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item key="1" xs={12} sm={6} md={3}>
          <Mcard>Test</Mcard>
        </Grid>
        <Grid item key="2" xs={12} sm={6} md={3}>
          <Mcard>Test</Mcard>
        </Grid>
        <Grid item key="3" xs={12} sm={6} md={3}>
          <Mcard>Test</Mcard>
        </Grid>
        <Grid item key="4" xs={12} sm={6} md={3}>
          <Mcard>Test</Mcard>
        </Grid>
        <Grid item key="5" xs={12} sm={6} md={3}>
          <Mcard>Test</Mcard>
        </Grid>
      </Grid>
    </Fragment>
  );
};

const MobilePage = () => {
  return (
    <Fragment>
      <MNavbar title="Dasboard" />
      <Container
        sx={{
          py: 1,
          mt: 1,
          backgroundColor: (theme) => theme.palette.grey[100],
        }}
        maxWidth="lg">
        <GridList />
      </Container>
    </Fragment>
  );
};

export default MobilePage;
