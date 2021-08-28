import { Fragment } from "react";
import Mcard from "../../components/common/m/card";
import MNavbar from "../../components/common/m/navbar";

const MobilePage = () => {
  return (
    <Fragment>
      <MNavbar title="Dasboard" />
      <Mcard>
        <h1>ini Contoh card dulu</h1>
      </Mcard>
    </Fragment>
  );
};

export default MobilePage;
