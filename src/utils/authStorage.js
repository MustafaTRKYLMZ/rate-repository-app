import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getAccessToken() {
    // Get the access token for the storage
    const accessToken =  AsyncStorage.getItem(
        `${this.namespace}:auth`,
      );
      return accessToken ? JSON.parse(accessToken) : [];
  };

  setAccessToken(accessToken) {
    // Add the access token to the storage
   
     AsyncStorage.setItem(
      `${this.namespace}:auth`,
      JSON.stringify(accessToken),
    );
  }

  removeAccessToken() {
    // Remove the access token from the storage
     AsyncStorage.removeItem(`${this.namespace}:auth`);
  }
}

export default AuthStorage;
//await sorunu çözülmeli