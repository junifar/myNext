import ContentHeader from "../common/content/header";
import style from "./index.module.css";

const { CssBaseline, Box } = require("@material-ui/core");
const { Fragment } = require("react");

const DashboardPageIndex = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ContentHeader title="Contoh" subtitle="Preview" />
      <section className={style.Content}>
        <Box className={style.Box}>
          <div className={style.BoxHeader}>
            <h2 className={style.BoxTitle}>Sample</h2>
          </div>
        </Box>
      </section>
      {/* <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        </Paper>
      </Container> */}
    </Fragment>
  );
};

export default DashboardPageIndex;
