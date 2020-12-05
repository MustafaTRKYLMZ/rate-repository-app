import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

 async getAccessToken  () {
    // Get the access token for the storage
   
    const accessToken =  await AsyncStorage.getItem(
        `${this.namespace}:auth`,
      );
      console.log("Accsess Token", accessToken);

      return accessToken ? JSON.parse(accessToken) : null;
  };

  async setAccessToken(accessToken) {
    // Add the access token to the storage
   
    await AsyncStorage.setItem(
      `${this.namespace}:auth`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
  //  this.setAccessToken(null);
    await AsyncStorage.removeItem(`${this.namespace}:auth`);
  }
}

export default AuthStorage;
//await sorunu çözülmeli