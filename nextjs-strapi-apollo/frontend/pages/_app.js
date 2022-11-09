import '../styles/globals.css';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import { HttpLink } from 'apollo-link-http';
// import { ApolloClient, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
