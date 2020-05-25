// pages/_app.js
import React from "react";
import { resetContext, getContext } from "kea";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import localStoragePlugin from "kea-localstorage";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import CssBaseline from "@material-ui/core/CssBaseline";
import { styledTheme, materialTheme } from "../src/theme";
import "../src/styles.css";

// How long do we try to render on the server before giving up? In milliseconds.
const SERVER_RENDER_TIMEOUT = 1000;

const makeStore = (initialState, options) => {
  // Reset Kea's context and pass `initialState` as defaults.
  // Add all plugins and other configuration here.
  const context = resetContext({
    defaults: initialState,
    createStore: true,
    plugins: [
      localStoragePlugin({
        storageEngine: process.browser ? window.localStorage : null,
      }),
    ],
  });
  return context.store;
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    // In case we are server rendering and our `Component` has a `logic` attached
    // to it, initialize it through a promise and pass the `resolve` function to
    // the logic as props.

    // It's then up to the logic to call `props.resolve()` when it has finished
    // its setup.

    if (ctx.isServer && Component.logic) {
      await Promise.race([
        new Promise((resolve) => Component.logic({ resolve }).mount()),
        new Promise((resolve) => setTimeout(resolve, SERVER_RENDER_TIMEOUT)),
      ]);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
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
export default withRedux(makeStore)(MyApp);
