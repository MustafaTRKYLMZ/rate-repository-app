import React from 'react';
import { FlatList, View, StyleSheet,Text, } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';


const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

});

const RepositoryList = () => {
  const { data } = useRepositories();
  console.log("Data loading",data)
  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
       renderItem={({ item }) => (
      <RepositoryItem item={item} />
    )}
     />
  );
};

export default RepositoryList;