// Import libraries for making a componenet
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Title from './Title';
import Images from 'assets';

export default class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 32, isLoading: true, imageURL: '', page: this.props.page ? this.props.page : 'home' };
  }
  componentWillMount() {
    this.Mounted = true;
    this.fetchWeather();
    this.fetchDavisETA();
    this.fetchCCETA();
  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  componentDidMount(){
  this.timer = setInterval(()=> this.fetchDavisETA(), 30000)
  this.timer = setInterval(()=> this.fetchCCETA(), 30000)
 }

 async fetchWeather() {
     try {
       let response = await fetch('https://api.apixu.com/v1/current.json?key=00f2f2b5bd644933a43234242172702&q=Somerville');
       let responseJson = await response.json();
       if (this.Mounted) {
         this.setState({ temp: Math.round(responseJson.current.temp_f), isLoading: false, imageURL: 'https:' + responseJson.current.condition.icon });
       }
     } catch(error) {
       console.error(error);
     }
   }

  async fetchDavisETA() {
       try {
         let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=2');
         let responseJson = await response.json();
         if (this.Mounted) {
           this.setState({ davisETA: responseJson.etas[2].etas[0] ? responseJson.etas[2].etas[0].avg : '-- ', isLoading: false });
         }
       } catch(error) {
         console.error(error);
       }
     }

  async fetchCCETA() {
          try {
            let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=1');
            let responseJson = await response.json();
            if (this.Mounted) {
              this.setState({ ccETA: responseJson.etas[1].etas[0] ? responseJson.etas[1].etas[0].avg : '-- ', isLoading: false });
            }
          } catch(error) {
            console.error(error);
          }
        }

  renderWeather() {
    if (this.state.imageURL == '') {
      return (
        null
      )
    }
    else {
      return (
        <View>
        <Image style={styles.navButton} source={{uri: this.state.imageURL}} />
          <Text style={styles.temperature}>{this.state.temp}º</Text>
        </View>
      )
    }
  }

  render() {
    const goToSectionList = () => Actions.sectionList();

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity onPress={goToSectionList}>
            <Image style={styles.hamburger} source={Images.hamburgermenu} />
          </TouchableOpacity>
          <Title page = {this.state.page} fontSize={22} />
          <View>
            {this.renderWeather()}
          </View>
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
    //flex: 1,
    flexBasis: 80

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
