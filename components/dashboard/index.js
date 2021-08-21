const {
  CssBaseline,
  Container,
  Paper,
  Typography,
} = require("@material-ui/core");
const { Fragment } = require("react");

const DashboardPageIndex = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default DashboardPageIndex;
