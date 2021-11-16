import React from 'react'
import Document, { Html, Head, NextScript, Main } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import PagesManifestPlugin from 'next/dist/build/webpack/plugins/pages-manifest-plugin';

export default class MyDocument extends Document {
  
  // Searches server side rendered styled components and corrects their classnames to match client side
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (<Html lang="en-EN">
      <Head></Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>);
  }
}
