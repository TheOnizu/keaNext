import React from "react";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
  CardMedia,
  Fab,
  Typography,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { makeStyles } from "@material-ui/core/styles";
import { orange, blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    background: orange[100],
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 400,
    backgroundSize: "auto",
  },
  grid: {
    margin: theme.spacing(0, 0, 4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    color: "#fff",
    background: blue[600],
  },
}));

export const CashPayment = ({ text }: { text?: string }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Fab disabled aria-label="like">
            <CheckCircleOutlineIcon />
          </Fab>
        }
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          les paniers de lucile
        </Typography>
        <Typography variant="h2" component="h2" align="center">
          <div>Merci pour votre confiance</div>
          <div>Vous devriez très vite recevoir un email</div>
          <div>À bientôt </div>
        </Typography>
        <CardMedia
          className={classes.media}
          style={{ margin: "40px 0" }}
          image="./svg/Team.svg"
          title="illustration de validation"
        />
        <Typography color="textSecondary" align="center">
          En validant, vous devez acceptez les conditions de vente
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item>
            <Fab
              variant="extended"
              color="primary"
              aria-label="agree"
              className={classes.fab}
            >
              <ArrowForwardIcon className={classes.extendedIcon} />
              j'accepte
            </Fab>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
