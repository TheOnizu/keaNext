import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
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
          {/* <List component="nav">
            <ListItem component="div">
              <ListItemText>
                <Typography color="inherit" variant="subtitle1">
                  tous nos produits
                </Typography>
              </ListItemText>

              <ListItemText inset>
                <Typography color="inherit" variant="subtitle1">
                  nos abonnements
                </Typography>
              </ListItemText>

              <ListItemText inset>
                <Typography color="inherit" variant="subtitle1">
                  Contact
                </Typography>
              </ListItemText>
            </ListItem>
          </List> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
