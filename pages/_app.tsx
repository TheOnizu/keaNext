import { Provider } from "react-redux";
import App from "next/app";
import { resetContext, getContext } from "kea";
import localStoragePlugin from "kea-localstorage";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styledTheme, materialTheme } from "../src/theme";
import "../src/styles.css";

export const initKeaContext = (initialState = {}) => {
  console.log("in initKeaContext, got initialState", initialState);

  resetContext({
    defaults: initialState, // defaults for logic
    plugins: [localStoragePlugin],
    attachStrategy: "dispatch",
    detachStrategy: "dispatch",
    createStore: {
      paths: ["kea", "scenes"],
      preloadedState: initialState, // for non-kea reducers
    },
  });
};

class MyApp extends App {
  constructor(props) {
    super(props);
    console.log("MyApp constructor");

    if (typeof window !== "undefined") {
      const { ...otherState } = props.initialState;
      initKeaContext(otherState);
      window.getContext = getContext;
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }

  static async getInitialProps({ Component, ctx }) {
    console.log("MyApp.getInitialProps");

    if (typeof window === "undefined") {
      initKeaContext();
    }

    // console.log('store state in MyApp.getInitialProps', getContext().store.getState())

    // so we can still capture the state after the getInitialState logic unmounts
    getContext().options.detachStrategy = "persist";

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } else if (
      Component._wrapper &&
      Component._wrappedComponent &&
      Component._wrappedComponent.getInitialProps
    ) {
      pageProps = await Component._wrappedComponent.getInitialProps(ctx);
    }

    let initialState = getContext().store.getState();

    getContext().options.detachStrategy = "dispatch";

    console.log("returning from MyApp.getInitialProps", {
      pageProps,
      initialState,
    });

    return { pageProps, initialState };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    const { store } = getContext();

    return (
      <Provider store={store}>
        <audio id="audio">
          <source src="./sounds/add.caf" type="audio/caf" />
          <source src="./sounds/add.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <ThemeProvider theme={styledTheme}>
          <MaterialThemeProvider theme={materialTheme}>
            <AnimatePresence exitBeforeEnter>
              <CssBaseline />
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </MaterialThemeProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
