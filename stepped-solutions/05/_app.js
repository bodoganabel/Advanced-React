import Page from '../components/Page';
import { ApollpProvider } from '@apollo/client';
import withData from '../../sick-fits/frontend/lib/withData';

function MyApp({ Component, pageProps, apollo }) {
  console.log(apollo)
  return (
    <ApollpProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApollpProvider>
  );
}


export default withData(MyApp);