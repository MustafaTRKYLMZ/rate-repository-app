import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import AppBarTab from './AppBarTab';
import {TouchableWithoutFeedback} from 'react-native';


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
               <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
                <AppBarTab />
            </TouchableWithoutFeedback>
           
       </View>
  )
   
};

export default AppBar;