import Link from "next/link";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";


type LayoutProps = {
	children: React.ReactNode
}


const SiteLayout = ({ children }: LayoutProps) => (
	<div>
		<Header />
		<div>{children}</div>
		<Footer />
	</div>
);

export default SiteLayout;
