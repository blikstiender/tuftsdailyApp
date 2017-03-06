'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';



var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },

});


class SpecialPage extends Component {
  render() {
    return (


      <View style={styles.container}>
        <Text style={styles.description}>
          This is a Special Page
        </Text>
        <Text style={styles.description}>
          Miscellaneous Pages will have 
        </Text>
      </View>
    );
  }
}

module.exports = SpecialPage;






