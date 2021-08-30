import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
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

const jumbotronParam = {
  title: "Title of a longer featured blog post",
  image: "https://source.unsplash.com/random",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  linkText: "continue reading ...",
};

const Jumbotron = (props) => {
  const { param } = props;

  return (
    <Fragment>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${param.image})`,
          // backgroundColor: (theme) => theme.palette.primary.main,
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                {param.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {param.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {param.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
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
          backgroundColor: (theme) => theme.palette.grey[300],
        }}
        maxWidth="lg">
        <Jumbotron param={jumbotronParam} />
        <GridList />
      </Container>
    </Fragment>
  );
};

export default MobilePage;
