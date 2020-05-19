import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <motion.div initial="from" animate="to" exit="out">
      {children}
    </motion.div>
    <Footer />
  </div>
);

export default SiteLayout;
