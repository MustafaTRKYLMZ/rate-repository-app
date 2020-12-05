import React, { useContext }  from 'react';
import { View, StyleSheet ,ScrollView, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab, {AppBarTabSingOut} from './AppBarTab';

import { useQuery } from '@apollo/react-hooks';
import {CURRENT_USER} from '../graphql/queries/authorizedUser'
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-native';

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
//const [authorize,result] = useMutation(AUTHORİZE);
const { data, error, loading } = useQuery(CURRENT_USER)
const authStorage = useContext(AuthStorageContext);

console.log("Current data",data)



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
                <AppBarTab link="/" name="Repositories" />
               
               {data ?<AppBarTabSingOut SignOut={SignOut} />
               :
             <AppBarTab link="/SignIn" name="Sign In" />
               }
             
              </ScrollView>
       </View>
  )
   
};

export default AppBar;
