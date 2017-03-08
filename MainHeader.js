// Import libraries for making a componenet
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Title from './Title'

import Images from 'assets';

// Make a component
export default class MainHeader extends Component {
  constructor() {
    super();
    this.state = { temp: 32, isLoading: true, imageURL: '' };
  }
  componentWillMount() {
    this.fetchWeather();
    this.fetchDavisETA();
    this.fetchCCETA();
  }

  componentDidMount(){
  this.timer = setInterval(()=> this.fetchDavisETA(), 30000)
  this.timer = setInterval(()=> this.fetchCCETA(), 30000)
 }

  fetchWeather() {
    fetch("https://api.apixu.com/v1/current.json?key=00f2f2b5bd644933a43234242172702&q=Somerville")
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Weather');
        this.setState({ temp: Math.round(responseData.current.temp_f), isLoading: false, imageURL: 'https:' + responseData.current.condition.icon });
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  fetchDavisETA() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=2")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ davisETA: responseData.etas[2].etas[0].avg, isLoading: false,});
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  fetchCCETA() {
    fetch("https://tufts.doublemap.com/map/v2/eta?stop=1")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ ccETA: responseData.etas[1].etas[0].avg, isLoading: false,});
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  render() {
    const goToSectionList = () => Actions.sectionList();

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={goToSectionList}>
            <Image style={styles.hamburger} source={Images.hamburgermenu} />
          </TouchableOpacity>
          <Title fontSize={22} />
          <TouchableOpacity>
            <Image style={styles.navButton} source={{uri: this.state.imageURL}} />
            <Text style={styles.temperature}>{this.state.temp}º</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <DoubleLine style={styles.doubleLine}/>
          <Image style={styles.shuttleIcon} source={Images.shuttle} />
          <Text style={styles.shuttleInfo}>Davis {this.state.davisETA}min CC {this.state.ccETA}min</Text>
          <DoubleLine style={styles.doubleLine} />
        </View>
      </View>
    );
  }
};

class DoubleLine extends Component {
  render() {
    return (
      <View>
        <View style={{ backgroundColor: '#000', height: 1, width: 200, marginBottom: 2 }} />
        <View style={{ backgroundColor: '#000', height: 1, width: 200 }} />
      </View>
    )
  }
};

const gridSize = 8.0;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    // height: 85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: gridSize,
    paddingRight: gridSize,
    paddingTop: 2 * gridSize + 4,
    paddingBottom: gridSize / 2,
    flex: 1,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: gridSize,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburger: {
    marginLeft: -gridSize,
    height: 30,
    width: 30,
  },
  shuttleIcon: {
    height: 10,
    width: 10,
    marginLeft: gridSize,
    marginRight: gridSize,
  },
  shuttleInfo: {
    fontSize: 11,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    color: '#484848',
    marginRight: gridSize,
  },
  navButton: {
    height: 2 * gridSize,
    width: 2 * gridSize,
  },
  temperature: {
    fontFamily: 'Avenir',
    // fontWeight: 'bold',
    fontSize: 11,
    // marginLeft: 4,
  },
  doubleLine: {
    flexGrow: 1,
  },
});

// const styles = {
//   viewStyle: {
//     backgroundColor: '#FFFFFF',
//     height: 85,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative',
//     //flexDirection: 'row',
//     //justifyContent: 'space-between',
//     paddingLeft: 5,
//     paddingRight: 5,
//     paddingTop: 30,
//     paddingBottom: 5,
//     flex:1
//   },
// 	textStyle: {
// 		fontSize: 20
// 	},
//   navigatorStyle: {
//     height: 20,
//     width: 20,
//   }
// };
