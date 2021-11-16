import React, { JSXElementConstructor, ReactNode } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Page from 'components/Page';
import Router from 'next/router';

// TODO: Swap with our own
import NProgress from 'nprogress';
import 'components/styles/nprogress.css';


Router.events.on('routeChangeStart', () => { NProgress.start() });
Router.events.on('routeChangeComplete', () => { NProgress.done() });
Router.events.on('routeChangeError', () => { NProgress.done() });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
