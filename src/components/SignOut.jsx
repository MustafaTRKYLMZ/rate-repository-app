import React, {use} from 'react';
import Text from './Text';
import {  StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import AuthStorageContext from '../contexts/AuthStorageContext';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';


const SignOut =  () => {
    const authStorage = useContext(AuthStorageContext);
    const history = useHistory();
    const client = useApolloClient();
         authStorage.removeAccessToken()
         client.resetStore()
         console.log("Token removed")
        history.push("/");
return 

};

export default SignOut;