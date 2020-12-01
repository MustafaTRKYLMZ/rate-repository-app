import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import SignIn from './SignIn';
import Text from './Text'

const styles = StyleSheet.create({
    flexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 30,
      alignItems:'stretch',
      alignContent:'flex-start',
      flexGrow:0,
    },
    flexButtonColor:{
        color:'#F8F8FF',
        justifyContent: 'space-around',
    }
  });
 

const AppBarTab = ({name,link}) => {
  return (
       <View style={styles.flexContainer}>
          <View>
          <Link to={link} component={TouchableWithoutFeedback} >
            <Text style={styles.flexButtonColor}>{name}</Text>
            </Link>
          </View>
       </View>
  )
   
};

export default AppBarTab;