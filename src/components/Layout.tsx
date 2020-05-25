import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { useValues, useActions } from "kea";
import { makeStyles, Dialog, DialogContent } from "@material-ui/core";
import { modalLogic } from "../../kea/modal";
import { MenuHeader } from "./header";
import { CashPayment } from "./OverlayCards/CashPayment";
import ProductCard from "./Product/Card";
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
  // const { modal, superModal, currentData } = useValues(modalLogic);
  // const { close, superClose } = useActions(modalLogic);

  return (
    <div>
      <MenuHeader />
      <div className={classes.root}>
        <motion.div initial="from" animate="to" exit="out">
          {children}
          {/* <Dialog fullWidth open={modal} onBackdropClick={() => close()}>
            <ProductCard data={currentData} popUp={true} />
            <DialogContent
              dangerouslySetInnerHTML={{ __html: currentData.description }}
            />
          </Dialog>
          <Dialog
            fullWidth
            open={superModal}
            onBackdropClick={() => superClose()}
          > */}
          {/* <CashPayment /> */}
          {/* </Dialog> */}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
