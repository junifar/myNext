import { Content, ContentHeader, ContentWrapper } from "../common/content";
import Tebel from "../common/tebel";
import style from "./index.module.css";

const { CssBaseline, Box } = require("@material-ui/core");
const { Fragment } = require("react");

const DashboardPageIndex = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ContentWrapper>
        <ContentHeader title="Contoh" subtitle="Preview" />
        <Content>
          <Box className={style.Box}>
            <div className={style.BoxHeader}>
              <h2 className={style.BoxTitle}>Sample</h2>
            </div>
            <div className={style.BoxBody}>
              <Tebel>Uji COba</Tebel>
            </div>
            <div className={style.BoxFooter}>Footer disini ya</div>
          </Box>
        </Content>
      </ContentWrapper>
    </Fragment>
  );
};

export default DashboardPageIndex;
