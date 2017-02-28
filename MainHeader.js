// Import libraries for making a componenet
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Make a component
class MainHeader extends Component {
  constructor() {
    super();
    this.state = { temp: 32, isLoading: true, imageURL: '' };
}
  componentWillMount() {
    this.fetchWeather();
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

  render() {
const goToSectionList = () => Actions.sectionList();
if (this.state.isLoading) {
  return (
    <View style={styles.viewStyle}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity onPress={goToSectionList}>
        <Image style ={ styles.navigatorStyle } source={require('./hamburgermenu.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 25 }}>The Tufts Daily</Text>
      <TouchableOpacity>
        <Image style ={ styles.navigatorStyle } />
      </TouchableOpacity>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <Image style={{ height: 10, width: 10}} source={require('./shuttle.png')} />
      <Text style={{ fontSize: 11, fontFamily: 'Avenir', marginLeft: 3 }}>Davis 2min CC 4min</Text>
    </View>
  </View>
  )
}
else {
  return (
    <View style={styles.viewStyle}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={goToSectionList}>
        <Image style ={ styles.navigatorStyle } source={require('./hamburgermenu.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 25 }}>The Tufts Daily</Text>
      <TouchableOpacity>
        <Image style ={ styles.navigatorStyle } source={{uri: this.state.imageURL}} />
        <Text style={{ fontSize: 10, marginLeft: 4 }}>{this.state.temp}</Text>
      </TouchableOpacity>
    </View>
    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <Image style={{ height: 10, width: 10}} source={require('./shuttle.png')} />
      <Text style={{ fontSize: 11, fontFamily: 'Avenir', marginLeft: 3 }}>Davis 2min CC 4min</Text>
    </View>
  </View>
  );
}
}
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    height: 85,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 30,
    paddingBottom: 5,
    flex:1
  },
	textStyle: {
		fontSize: 20
	},
  navigatorStyle: {
    height: 20,
    width: 20,
  }
};

//Make the componenet available to other parts of the app
export default MainHeader;
