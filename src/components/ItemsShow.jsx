import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';


const styles = StyleSheet.create({
    flexContainerThird:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10
      },
    flexContainerItems:{
        flexDirection:'column',
        justifyContent:'center',
        padding:10,
      },
  });
const ItemsShow = ({items}) => {
  return (
       <View style={styles.flexContainerThird}>
            <View style={styles.flexContainerItems}>
                <View>
                    <Text testID="stargazersCount" fontWeight='bold'>{items.stargazersCount>=1000?(Math.round(items.stargazersCount/100)/10+'k'):items.stargazersCount} </Text >
                </View>
                <View>
                    <Text >Stars  </Text>
                </View>
            </View>
            <View style={styles.flexContainerItems}>
                <View>
                    <Text testID="forksCount" fontWeight='bold' > {items.forksCount>=1000?(Math.round(items.forksCount/100)/10+'k'):items.forksCount}</Text>
                </View>
                <View>
                    <Text >Forks</Text>
                </View>
                </View>
            <View style={styles.flexContainerItems}>
                <View>
                    <Text testID="reviewCount" fontWeight='bold'> {items.reviewCount>=1000?(Math.round(items.reviewCount/100)/10+'k'):items.reviewCount}</Text>
                </View>
                <View>
                    <Text >Reviews</Text>
                </View>
            </View>
            <View style={styles.flexContainerItems}>
                <View>
                    <Text  testID="ratingAverage" fontWeight='bold'> {items.ratingAverage>=1000?(Math.round(items.ratingAverage/100)/10+'k'):items.ratingAverage}</Text>
                </View>
                <View>
                    <Text >Rating</Text>
                </View>
            </View>
       </View>
        )
};

export default ItemsShow;