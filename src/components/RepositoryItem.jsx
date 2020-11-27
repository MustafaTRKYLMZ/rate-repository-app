import React from 'react';
import {  View, StyleSheet,Text, } from 'react-native';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const RepositoryItem = ({item}) => {
 return (
      <View style={styles.item}>
      <Text style={styles.title}>Fullname: {item.fullName} <br/>
                                 Description: {item.description}<br/>
                                 language: {item.language}<br/>
                                 Stars:{item.stargazersCount}<br/>
                                 Forks: {item.forksCount}<br/>
                                 Reviews: {item.reviewCount}<br/>
                                 Rating: {item.ratingAverage}
      </Text>
    </View>
 )   
}
   

  export default RepositoryItem;