import React from 'react';
import { View, StyleSheet,TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
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



const AppBarTab = ({name,link,show}) => {
  if(!show||show===undefined){
    return null;
  }
  return (
       <View style={styles.flexContainer}>
          <View>
          <Link to={link} component={TouchableWithoutFeedback}>
            <Text style={styles.flexButtonColor}>{name}</Text>
            </Link>
          </View>
       </View>
  )
   
};

export default AppBarTab;


export const AppBarTabSingOut = ({SignOut,show}) => {
  if(!show){
    return null;
  }
  return (
       <View style={styles.flexContainer}>
          <View>
          <TouchableWithoutFeedback onPress={SignOut}>
                  <Text style={styles.flexButtonColor}>SignOut</Text>
          </TouchableWithoutFeedback>
          </View>
       </View>
  )
   
};