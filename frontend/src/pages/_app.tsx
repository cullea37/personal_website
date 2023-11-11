import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import store from '@src/redux/store';
import theme from '@src/styles/theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <ThemeUIProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeUIProvider>
      </Provider>
    );
  }
}

export default MyApp;
