import React, { useContext }  from 'react';
import { View, StyleSheet ,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab, {AppBarTabSingOut} from './AppBarTab';

import { useQuery } from '@apollo/react-hooks';
import {CURRENT_USER} from '../graphql/queries/authorizedUser'
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const styles = StyleSheet.create({
    flexContainer: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
    },
    flexItemA: {
      flexGrow: 0,
      backgroundColor: '#24292e',
    },
    flexItemB: {
      flexGrow: 1,
      backgroundColor: 'blue',
    },
    flexButtonColor:{
      color:'#F8F8FF',
      justifyContent: 'space-around',
  }
  });


const AppBar = () => {

const { data, error, loading } = useQuery(CURRENT_USER)
const authStorage = useContext(AuthStorageContext);

console.log("Current data",data)
const authorizedUser = data ? data.authorizedUser : undefined;

  const history = useHistory();
  const client = useApolloClient();

const SignOut = async () => {
 await authStorage.removeAccessToken();
  client.resetStore()
     console.log("Token removed")
return  history.push("/");
}
 
  return (
       <View style={styles.flexContainer} >
             <ScrollView horizontal>
                <AppBarTab link="/" name="Repositories" show="true"/>
                <AppBarTab link="/CreateView" name="Create View" show={authorizedUser}/>
                <AppBarTab link="/Reviews" name="My Reviews" show={authorizedUser}/>
                <AppBarTab link="/SignIn" name="Sign In" show={!authorizedUser} />  
                <AppBarTab link="/SignUp" name="Sign Up" show={!authorizedUser} />
                <AppBarTabSingOut SignOut={SignOut} show={authorizedUser}/>
              </ScrollView>
       </View>
  )
   
};

export default AppBar;
