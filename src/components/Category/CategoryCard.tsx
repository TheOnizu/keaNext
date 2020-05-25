import React from "react";
import { useActions } from "kea";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  CardActions,
  Card,
  Fab,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { dataLogic } from "../../../kea/data";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "left",
    height: 300,
    color: theme.palette.text.secondary,
    position: "relative",
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export const CategoryCard = ({ category }) => {
  const { setTitle } = useActions(dataLogic);
  const { name, id, bg } = category;

  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{
        background: bg,
        // backgroundImage: `url(${category.img})`,
        // backgroundPosition: "center center",
        // backgroundSize: "cover",
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          //   className={classes.title}
          color="textSecondary"
          style={{ color: "white" }}
          gutterBottom
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Fab
          //   component={Link}
          //   src={{ pathname: `/category/${newName}` }}
          onClick={() => setTitle({ name, id, bg })}
          aria-label={name}
          className={classes.fab}
          style={{ background: bg }}
        >
          <ArrowForwardIcon />
        </Fab>
      </CardActions>
    </Card>
  );
};
