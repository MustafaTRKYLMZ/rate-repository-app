import React from 'react';
import { NativeRouter } from 'react-router-native';
import Main from './src/components/Main';
import { ApolloProvider } from '@apollo/react-hooks';
import createApolloClient from './src/utils/apolloClient';
import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
  console.log("Manifest",Constants.manifest);
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
         <Main />
      </ApolloProvider>
    </NativeRouter>
  );
};

export default App;