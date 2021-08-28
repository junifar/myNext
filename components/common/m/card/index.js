import { Card, CardContent } from "@material-ui/core";
import { Fragment } from "react";

const Mcard = (props) => {
  return (
    <Fragment>
      <Card sx={{ minWidth: 275 }} variant="outlined">
        <CardContent>{props.children}</CardContent>
      </Card>
    </Fragment>
  );
};

export default Mcard;
