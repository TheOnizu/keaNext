import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Links from "./Links";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  login: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const MenuHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Les paniers de Lucile
          </Typography>
          <Links />
        </Toolbar>
      </AppBar>
    </div>
  );
};
