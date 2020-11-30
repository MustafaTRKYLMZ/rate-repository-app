import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Constants from 'expo-constants';
//import Text from './Text'

const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 30,
      alignItems:'stretch',
      alignContent:'flex-end',
      flexGrow:0,
    },
    flexButtonColor:{
        color:'#F8F8FF',
    }
  });
 

const AppBarTab = () => {
  return (
       <View style={styles.flexContainer}>
           <Text style={styles.flexButtonColor}>Repositories</Text>
           <Text style={styles.flexButtonColor}>XXX</Text>
       </View>
  )
   
};

export default AppBarTab;