import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { Layout } from '../components';
import store from '../utils/services/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
