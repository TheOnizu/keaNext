import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import { MenuHeader } from "./header";
import { Footer } from "./footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(20, 3, 0),
    position: "relative",
    "min-height": "calc(100vh - 438px)",
  },
}));

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <MenuHeader />
      <div className={classes.root}>
        <motion.div initial="from" animate="to" exit="out">
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
