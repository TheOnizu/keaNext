import { AppProps, Container } from "next/app";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useEffect } from "react";
import { styledTheme, materialTheme } from "../src/theme";
import "../src/styles.css";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={styledTheme}>
      <MaterialThemeProvider theme={materialTheme}>
        <AnimatePresence exitBeforeEnter>
          <CssBaseline />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MaterialThemeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
