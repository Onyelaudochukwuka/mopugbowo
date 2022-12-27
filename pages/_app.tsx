import React from 'react';

import '../styles/globals.css';
import 'react-quill/dist/quill.snow.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from '../components';
import store from '../utils/services/store';

const MyApp = ({ Component, pageProps }: AppProps): any => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
