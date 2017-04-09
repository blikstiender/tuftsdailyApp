'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCardArt from './ArticleCardArt';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native';
import MainHeader from './MainHeader';

import flagBlueImg from './assets/images/colorize.png';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Superclarendon'
  },

    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  background: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'column'
  },
  navBar: {
    backgroundColor: '#0000FF'
    },
  marker: {
    marginLeft: 46,
    marginTop: 33,
    fontWeight: 'bold',
  },
  time: {
    fontFamily: 'Avenir',
    fontSize: 18
  },
  timeDigit: {
    fontWeight: 'bold'
  }


});


class ShuttlePage extends Component {
  constructor() {
    super();
    this.state = { davisETA: 0, ccETA: 0, olinETA: 0,  isLoading: true, joeyLat: 0, joeyLng: 0 };

  }

  componentWillMount() {
    this.fetchDavis();
    this.fetchCC();
    this.fetchOlin();
    this.getJoey();
  }

  fetchDavis() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=2")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ davisETA: responseData.etas[2].etas[0].avg, isLoading: false });
      console.log(responseData);
  })
    .catch((error) => {
      console.log(error);
    })
    .done();
  }

  fetchCC() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=1")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ ccETA: responseData.etas[1].etas[0].avg, isLoading: false });
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

  getJoey() {
      console.log("getjoey")
      fetch("https://tufts.doublemap.com/map/v2/buses/?")
      .then((response) => {
    return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
        this.setState({ joeyLat: responseData[0].lat, joeyLng: responseData[0].lon});
  })

    .catch((error) => {
      console.log("Error");
      console.log(error);
    })
    .done();
    console.log("bye")
    console.log(this.state)
    }

  render() {
    console.log("hi")
    console.log(this.state)
    const goBack = () => Actions.pop();
      if (this.state.isLoading) {
        return (
          <Text>Loading...</Text>
          )
      }


    return (

<View style={{height: windowSize.height}} >
        <ScrollView style={styles.background}>
      <MainHeader />
    <ArticleCardArt>

      <MapView
        style={{height: windowSize.height/3, margin: 40}}
    initialRegion={{
      latitude: 42.405804,
      longitude: -71.11956,
      latitudeDelta: 0.02,
      longitudeDelta: 0.01,
    }}
    >
          <MapView.Marker
            onPress={() => this.setState({ marker1: !this.state.marker1 })}
            coordinate={{
              latitude: this.state.joeyLat,
              longitude: this.state.joeyLng,

              //latitude: 42.40505,
              //longitude: -71.11995,
            }}

            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            image= {this.state.marker1 ? flagBlueImg : flagBlueImg}
          >

                      <Text style={styles.marker}></Text>

          </MapView.Marker>
      </MapView>








        <Text style={styles.description}>
        Davis Square


        <Text style={styles.time}>

        <Text style={styles.timeDigit}>
        {this.state.davisETA}
        </Text> min


        </Text>

            </Text>

        <Text style={styles.description}>
        Campus Center


        <Text style={styles.time}>
        <Text style={styles.timeDigit}>
          {this.state.ccETA}
          </Text> min sdkjhfakjdsfh a

        </Text>
        </Text>

        <Text style={styles.description}>
        Olin Hall


        <Text style={styles.time}>
        <Text style={styles.timeDigit}>
        {this.state.olinETA}
        </Text> min
        </Text>
        </Text>
    </ArticleCardArt>

      </ScrollView>
       <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./assets/images/backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
        </View>


    );
  }
}

export default ShuttlePage;
