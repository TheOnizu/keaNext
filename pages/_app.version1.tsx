import App from "next/app";
import { Provider } from "react-redux";
import { resetContext, getContext } from "kea";
import localStoragePlugin from "kea-localstorage";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styledTheme, materialTheme } from "../src/theme";
import { wrapper } from "../kea/store";
import "../src/styles.css";

export const initKeaContext = (initialState = {}) => {
  console.log("in initKeaContext, got initialState", initialState);

  if (process.browser) {
    // console.log(window);
    const context = resetContext({
      createStore: true,
      defaults: initialState,
      plugins: [
        localStoragePlugin({
          storageEngine: window.localStorage,
        }),
      ],
    });

    return context.store;
  }
};

class MyApp extends App {
  constructor(props) {
    super(props);
    if (process.browser) {
      // remove here what is not needed
      const { ...otherState } = props.initialState;
      initKeaContext(otherState);
      window.getContext = getContext;
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
    console.log(this.props);
    const { store } = getContext();

    const AudioContent = () => (
      <audio id="audio">
        <source src="./sounds/add.caf" type="audio/caf" />
        <source src="./sounds/add.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    );

    return (
      <Provider key="provider" store={store}>
        <AudioContent />
        <ThemeProvider key="styledTheme" theme={styledTheme}>
          <MaterialThemeProvider key="materialTheme" theme={materialTheme}>
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

export default wrapper.withRedux(MyApp);
