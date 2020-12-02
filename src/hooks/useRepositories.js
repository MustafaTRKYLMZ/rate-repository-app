import React,{ useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import {Text} from 'react-native'

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
 const { data, error, loading} = useQuery(GET_REPOSITORIES,{
  fetchPolicy: 'cache-and-network'
 });

if (loading)  {
    return <Text>loading...</Text>
  }
  if (error)  {
    return <Text>Error...</Text>
  }
  

  return { data, loading,error};
};

export default useRepositories;


/*
const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.1.207:5000/api/repositories');
    const json = await response.json();
console.log("Repository List", json)
    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);
*/