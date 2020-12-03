import ApolloClient from 'apollo-boost';
import Constants from 'expo-constants';

const createApolloClient = () => {
    const uri=Constants.manifest.extra.uri;
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    uri,
  });
};

export default createApolloClient;

//Continue from Storing data in the user's device