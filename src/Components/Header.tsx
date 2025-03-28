import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <Image
              testID='Logo'
              source={require('../assets/Youtube.png')}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.iconButton} testID='CastLogo'>
            <Icon name="cast" size={24} color={'#fff'} /> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} testID='NotificationIcon'>
            <Icon name="notifications" size={24} color={'#fff'} /> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} testID='SearchIcon'>
            <Icon name="search" size={24} color={'#fff'} /> 
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#121212',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    marginTop:'10%'
    
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 120,
    resizeMode: 'contain',
  },
  iconButton: {
    marginLeft: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});