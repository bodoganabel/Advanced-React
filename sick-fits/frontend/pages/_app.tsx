import React, { JSXElementConstructor, ReactNode } from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Page from 'components/Page';
import Router from 'next/router';
import withData from '../lib/withData';
import { ApolloProvider } from '@apollo/client'

// TODO: Swap with our own
import NProgress from 'nprogress';
import 'components/styles/nprogress.css';


Router.events.on('routeChangeStart', () => { NProgress.start() });
Router.events.on('routeChangeComplete', () => { NProgress.done() });
Router.events.on('routeChangeError', () => { NProgress.done() });

function MyApp({ Component, pageProps, apollo }: AppProps) {  
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page >
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx}) {
  let pageProps:any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return pageProps;
}

export default withData(MyApp);