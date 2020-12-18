import React from 'react';
import Constants from 'expo-constants';
import { Route, Switch, Redirect, Link } from 'react-router-native';
import {View, StyleSheet, Text } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar  from './AppBar'
import SignIn from './SignIn';
import RepositoryView from './RepositoryView';
import CreateView from './CreateView';
import SignUp from './SingUp';
import ReviewList from './ReviewList';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'grey',
    flexGrow: 1,
    flexShrink: 1,
    
  },
  AppBarContainer:{
    backgroundColor: '#24292e',
    paddingTop: Constants.statusBarHeight,
  }
});

const Main = () => {
  return ( 
    <View style={styles.container}>
      <View style={styles.AppBarContainer}><AppBar /></View>
      
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/SignIn" exact>
           <SignIn />
        </Route>
        <Route path="/repo/:id" exact>
              <RepositoryView />
        </Route>
        <Route path="/CreateView" exact>
           <CreateView />
        </Route>
        <Route path="/Reviews" exact>
          <ReviewList />
        </Route>
        <Route path="/SignUp" exact>
           <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;