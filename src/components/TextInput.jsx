import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    fontSize: theme.fontSizes.subheading,
    borderRadius: 5,
    borderColor: theme.colors.main
  },
  inputError: {
    borderColor: theme.colors.textError
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle =  [styles.input, style];
  
  if (error) {
    textInputStyle = [...textInputStyle, styles.inputError];
  }
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;