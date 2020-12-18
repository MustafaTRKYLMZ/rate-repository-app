import React from 'react';
import Text from './Text';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';

import * as yup from 'yup';

const initialValues = {
    username: '',
    password: '',
  };

  const styles = StyleSheet.create({
    formStyle: {
      display: 'flex',
      alignItems: 'stretch',
      padding: 10,
      backgroundColor:'white',
    },
    button: {
      padding: 10,
      margin: 5,
      textAlign: 'center',
      borderRadius: 3, 
      backgroundColor:'#0366d6',
    }
  });

 
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

export const SignInContainer =({ onSubmit }) =>{

    return (
        <View style={styles.formStyle}>
            <FormikTextInput testID="usernameField"  name="username" placeholder="Username" />
            <FormikTextInput testID="passwordField" name="password" placeholder="Password" secureTextEntry={true} />
            <TouchableWithoutFeedback onPress={onSubmit}>
               <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Sign In</Text>
            </TouchableWithoutFeedback>
        </View>
      );
}


const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log("valuesss",username)
    try {
      await signIn({ username, password });
    
    } catch (e) {
      console.log(e);
    }
  };

    return (
        <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            
          {({ handleSubmit }) => <SignInContainer onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;