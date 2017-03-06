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


class ShuttlePage extends Component {
  constructor() {
    super();
    this.state = { davisETA: 0, ccETA: 0, olinETA: 0,  isLoading: true };

  }

  componentWillMount() {
    this.fetchDavis();
    this.fetchCC();
    this.fetchOlin();
  }

  fetchDavis() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=1")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ davisETA: responseData.etas[1].etas[0].avg, isLoading: false });
      console.log(responseData);
  })
    .catch((error) => {
      console.log(error);
    })
    .done();
  }

  fetchCC() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=2")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ ccETA: responseData.etas[2].etas[0].avg, isLoading: false });
      console.log(responseData);
  })
    .catch((error) => {
      console.log(error);
    })
    .done();
}

  fetchOlin() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=6")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ olinETA: responseData.etas[6].etas[0].avg, isLoading: false });
      console.log(responseData);
  })
    .catch((error) => {
      console.log(error);
    })
    .done();  
}

  render() {
      if (this.state.isLoading) {
        return (
          <Text>Loading...</Text>
          )
      }
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
        Davis Shuttle eta is 
        {this.state.davisETA}
        CC eta is 
        {this.state.ccETA}
        Olin eta is 
        {this.state.olinETA}
        </Text>

      </View>
    );
  }
}

export default ShuttlePage;





