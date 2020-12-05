import {AUTHORİZE} from '../graphql/mutation/authorize';
import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';


const useSignIn = () => {
    const [authorize, result] = useMutation(AUTHORİZE);
    const authStorage = useContext(AuthStorageContext);
    const history = useHistory();
    const client = useApolloClient();
  
    const signIn = async ({ username, password }) => {
        const {data} = await  authorize({
            variables: { username, password }
          });
        console.log("Authorize XXX", data)
        await  authStorage.setAccessToken(data.authorize.accessToken);//it is working

       client.resetStore();
       history.push("/");
    };

   

    return [signIn, result];
  };

  export default useSignIn;

  /*

const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login, result] = useMutation(LOGIN, {
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    }
  })

   // eslint-disable-line

  if (!show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()
    login({
      variables: { username, password }
    })
    console.log("Login =", username,password)
   
  }
  */