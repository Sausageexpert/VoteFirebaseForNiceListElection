import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthenticationScreen from './Screens/Authentication';

export default class App extends React.Component{
  render(){
    return <Authentication/>
  }
}
