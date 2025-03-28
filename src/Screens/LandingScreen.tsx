import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { data } from '../assets/Data/Data'

export default class LandingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.MainContent}>
        {data.map(item => (
            <TouchableOpacity key={item.id}>
              <Card item={item} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{marginTop:-5}}>
          <Footer />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
    
  },
  MainContent: {
    height:'90%'
  },
  title: {
    color:'#fff'
  }
})