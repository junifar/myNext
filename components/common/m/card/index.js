import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";

const Mcard = (props) => {
  return (
    <Fragment>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Mcard;
