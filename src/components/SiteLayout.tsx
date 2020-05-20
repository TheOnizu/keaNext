import { MenuHeader } from "./header";
import { Footer } from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const SiteLayout = ({ children }: LayoutProps) => (
  <div>
    <MenuHeader />
    {children}
    <Footer />
  </div>
);

export default SiteLayout;
