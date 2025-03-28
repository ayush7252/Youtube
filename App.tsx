import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import LandingScreen from './src/Screens/LandingScreen'

export default class App extends Component {
  render() {
    return (
      <View>
        <LandingScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({})