import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ThemeUIProvider } from 'theme-ui';
import store from '@src/redux/store';
import getTheme from '@src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = getTheme('dark');

  return (
    <Provider store={store}>
      <ThemeUIProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeUIProvider>
    </Provider>
  );
}

export default MyApp;
