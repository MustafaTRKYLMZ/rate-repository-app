import React from 'react';
import {  View, StyleSheet, Image ,ImageBackground} from 'react-native';
import ItemsShow from './ItemsShow'
import Text from './Text'
//Text style ayrı componente ayır 

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
                <View style={styles.flexContainerFirst}>
                  <Image
                       style={styles.tinyLogo}
                       source={{ uri: item.ownerAvatarUrl }}
                  />
                </View> 
                <View style={styles.flexContainerExtra}>
                   <View>
                     <Text fontWeight='bold'> {item.fullName}</Text>
                  </View>
                  <View>
                      <Text >{item.description}</Text> 
                  </View>
                  <View style={styles.languageContainer}>
                      <Text color='textSecondary' style={styles.styleLanguage}>  {item.language}</Text>
                  </View>
                </View> 
            </View>
            <View style={styles.flexContainerThird}>
              <ItemsShow items={item} /> 
            </View> 
        </View>
    </View>
 )   
}
   

  export default RepositoryItem;


  
/*
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



  <View style={styles.flexContainerItems}>
                      <View>
                        <Text style={styles.bigText}>{item.stargazersCount>=1000?(Math.round(item.stargazersCount/100)/10+'k'):item.stargazersCount} </Text >
                      </View>
                      <View>
                          <Text style={styles.blackText}>Stars  </Text>
                    </View>
                  </View>
                  <View style={styles.flexContainerItems}>
                      <View>
                        <Text style={styles.bigText}> {item.forksCount>=1000?(Math.round(item.forksCount/100)/10+'k'):item.forksCount}</Text>
                      </View>
                      <View>
                        <Text style={styles.blackText}>Forks</Text>
                      </View>
                  </View>
                <View style={styles.flexContainerItems}>
                    <View>
                        <Text style={styles.bigText}> {item.reviewCount>=1000?(Math.round(item.reviewCount/100)/10+'k'):item.reviewCount}</Text>
                    </View>
                    <View>
                        <Text style={styles.blackText}>Reviews</Text>
                    </View>
                </View>
                <View style={styles.flexContainerItems}>
                  <View>
                    <Text style={styles.bigText}> {item.ratingAverage>=1000?(Math.round(item.ratingAverage/100)/10+'k'):item.ratingAverage}</Text>
                  </View>
                  <View>
                    <Text style={styles.blackText}>Rating</Text>
                  </View>
                </View>
  */