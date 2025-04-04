import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import MainNavigation from './src/Navigation/MainNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import VideoContainer from './src/Components/VideoContainer';

export default class App extends Component {
  render() {
    return (
      <MainNavigation />
      // <VideoContainer />
    
    )
  }
}

const styles = StyleSheet.create({})