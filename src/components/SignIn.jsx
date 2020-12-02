import React from 'react';
import Text from './Text';
import {  StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';

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

  const SomethingDo = (values) => {
    console.log(values);
  };
const Login =({ onSubmit }) =>{

    return (
        <View style={styles.formStyle}>
            <FormikTextInput name="userName" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} />
            <TouchableWithoutFeedback onPress={onSubmit}>
               <Text color='tag' fontSize='subheading' fontWeight='bold' style={styles.button}>Sign In</Text>
            </TouchableWithoutFeedback>
        </View>
      );
}


const SignIn = () => {


    return (
        <Formik 
        initialValues={initialValues} 
        onSubmit={SomethingDo}>
          {({ handleSubmit }) => <Login onSubmit={handleSubmit} />}
        </Formik>
      );
};

export default SignIn;