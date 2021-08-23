import { Fragment } from "react";
import Navbar2, {
  Navbar2Container,
  Navbar2Logo,
} from "../../components/common/v2/navbar";

const DashboardPage = () => {
  return (
    <Fragment>
      <Navbar2>
        <Navbar2Container>
          <Navbar2Logo>
            <h1>Test</h1>
          </Navbar2Logo>
        </Navbar2Container>
      </Navbar2>
    </Fragment>
  );
};

export default DashboardPage;
