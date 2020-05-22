import React, { FunctionComponent } from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(6, 0, 6),
  },
}));

type SectionProps = {
  title: string;
};

export const SectionTitle: FunctionComponent<SectionProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h3" component="h2" className={classes.title}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};
