import React from 'react';
import { View, StyleSheet ,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab from './AppBarTab';


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
  });
const AppBar = () => {
  return (
       <View style={styles.flexContainer} >
             <ScrollView horizontal>
                <AppBarTab link="/" name="Repositories" />
                <AppBarTab link="/SignIn" name="Sign In" />
              </ScrollView>
       </View>
  )
   
};

export default AppBar;