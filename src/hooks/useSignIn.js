import {AUTHORİZE} from '../graphql/mutation/authorize';
import { useMutation } from '@apollo/client';
import authStorage from '../utils/authStorage';
import React, { useState, useEffect } from 'react'


const useSignIn = () => {
    const [authorize, result] = useMutation(AUTHORİZE);
  
    const signIn = async ({ username, password }) => {
        authorize({
            variables: { username, password }
          })
    };

  useEffect(() => {
    if (result.data) {
        const storage = new authStorage ();
        storage.setAccessToken(result.data.authorize.accessToken);//it is working
       
    } 
    console.log("LoginForm if",result.data)
  }, [result.data])

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