import React from 'react';
import {  View, StyleSheet, Image ,TouchableWithoutFeedback, Button} from 'react-native';
import ItemsShow from './ItemsShow'
import Text from './Text'
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
    flexContainerTop: {
      flexDirection: 'column',
      padding: 10, 
      backgroundColor:'white',
    },
    flexContainerFirst: {
      flexDirection: 'column',
      justifyContent:'flex-start',
      padding:10
    },
    flexContainerTwo:{
      flexDirection:'row',
      justifyContent:'flex-start',
      padding:10,
     
    },
    flexContainerThird:{
      flexDirection:'row',
      justifyContent:'space-around',
      padding:10
    },
    flexContainerExtra:{
      flexDirection:'column',
      padding:10,
      justifyContent:'space-between',
    },

    flexContainerItems:{
      flexDirection:'column',
      justifyContent:'space-around',
    },
    styleLanguage:{
      color:'white',
      fontSize:20,
      marginTop: 5,
      marginBottom: 5,
      borderRadius: 5,
      backgroundColor:'#0366d6',
    },
    tinyLogo: {
      width: 100,
      height: 100,
    },
    languageContainer:{
        flexGrow: 0,
        justifyContent:'flex-start',
        alignItems: 'flex-start'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });

const RepositoryItem = ({item}) => {

 return (
      <View style={styles.flexContainerTop}>
        <View style={styles.flexContainerFirst}>
            <View style={styles.flexContainerTwo}>
                <View style={styles.flexContainerFirst} >
                  <Image
                       style={styles.tinyLogo}
                       source={{ uri: item.ownerAvatarUrl }}
                  />
                </View> 
                <View style={styles.flexContainerExtra}>
                   <View>
                     <Text testID="fullName" fontWeight='bold'> {item.fullName}</Text>
                  </View>
                  <View>
                      <Text testID="description">{item.description}</Text> 
                  </View>
                  <View style={styles.languageContainer}>
                      <Text testID="language" color='textSecondary' style={styles.styleLanguage}>  {item.language}</Text>
                  </View>
                </View> 
            </View>
            <View style={styles.flexContainerThird}>
              <ItemsShow items={item} /> 
            </View> 
        </View>
        {item.singleView ? <Button onPress={()=> Linking.openURL(item.url)} title='Open in GitHub' /> : <></>}
        
    </View>
 )   
}

  export default RepositoryItem;

