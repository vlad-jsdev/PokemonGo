import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Home from './pages/Home';

const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
