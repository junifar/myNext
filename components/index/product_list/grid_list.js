import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";

const GridList = (props) => {
  return (
    <Fragment>
      <Grid container spacing={4}>
        {props.cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                sx={{
                  // 16:9
                  pt: "56.25%",
                }}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
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
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default GridList;
