import Link from "next/link";
import { createMuiTheme ,CssBaseline, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import { _AppBar as AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});


const SiteLayout = ({ children }) => (
	<div>
		<CssBaseline />
		<ThemeProvider theme={theme}>
		<AppBar />
			<div className="GAOUSSOU">{children}</div>
		<Footer />
		</ThemeProvider>
	</div>
);

export default SiteLayout;
