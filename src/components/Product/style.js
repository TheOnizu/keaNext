import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    // height: "456px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  media: {
    height: "200px",
  },
  bgRoot: `
      height: 200px;
      background: black;
    `,
  addToCart: {
    // marginLeft: "auto",
  },
  title: {
    margin: theme.spacing(2, 0),
    "font-weight": 400,
    color: "black",
  },
  actiondiv: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  chip: {
    color: "#000000",
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabContainer: {
    display: "flex",
    margin: "auto",
  },
  fab: {},
  body1: {
    textAlign: "center",
    margin: "0px 5px",
    width: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
