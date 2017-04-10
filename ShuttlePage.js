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
import ArticleCard from './ArticleCard';
import MapView from 'react-native-maps';
import { ScrollView } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

import flagBlueImg from './assets/images/colorize.png';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var styles = StyleSheet.create({
  description: {

    fontSize: 12,
    textAlign: 'right',
    color: '#000000',
    fontFamily: 'Superclarendon',
    width: windowSize.width*.40,
    textAlign: 'right',
    paddingLeft: 20
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
  },

  borderStyle: {
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 20,
    marginRight: 20

  }


});


class ShuttlePage extends Component {
  constructor() {
    super();
    this.state = { davisETA: '--', ccETA: '--', olinETA: '--',  isLoading: true, joeyLat: 0, joeyLng: 0, animating: true, tabs: ['Davis Sq', 'SMFA/NEC', 'Boston Ave'],
    currentTab: 'Davis Sq' };

  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchDavis();
    this.fetchCC();
    this.fetchOlin();
    this.getJoey();
  }

  closeActivityIndicator() {
        setTimeout(() => {
           this.setState({animating: false});
        }, 2000);
     }

  componentDidMount(){
  this.closeActivityIndicator();
  this.timer = setInterval(()=> this.fetchDavis(), 30000)
  this.timer = setInterval(()=> this.fetchCC(), 30000)
  this.timer = setInterval(()=> this.fetchOlin(), 30000)
  this.timer = setInterval(()=> this.getJoey(), 250)
 }

 componentWillUnmount() {
   this.Mounted = false;
 }

 handleTabPressed(tab, e) {
   this.setState({
     currentTab: tab,
   });
 }

async fetchDavis() {
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

async fetchCC() {
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

async fetchOlin() {
        try {
          let response = await fetch('https://tufts.doublemap.com/map/v2/eta?stop=6');
          let responseJson = await response.json();
          if (this.Mounted) {
            this.setState({ olinETA: responseJson.etas[6].etas[0] ? responseJson.etas[6].etas[0].avg : '-- ', isLoading: false });
          }
        } catch(error) {
          console.error(error);
        }
      }

async getJoey() {
        try {
          let response = await fetch('https://tufts.doublemap.com/map/v2/buses');
          let responseJson = await response.json();
          if (this.Mounted) {
            this.setState({ joeyLat: responseJson[0] ? responseJson[0].lat : 0, joeyLng: responseJson[0] ? responseJson[0].lon : 0 });
          }
        } catch(error) {
          console.error(error);
        }
}

  render() {
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
      <SubHeader tabs={this.state.tabs}
                 currentTab={this.state.currentTab}
                 onTabPressed={(tab, e) => this.handleTabPressed(tab, e)}/>
    <ArticleCard style={{ backgroundColor: 'white'}}>
      <Text style={{ fontSize: 20, fontFamily: 'Superclarendon', paddingLeft: 10, paddingTop: 10 }}>DAVIS SHUTTLE</Text>
      <View style={{paddingTop: 10,
      borderBottomWidth: 2,
      borderColor: 'black',
      height: 5,
      marginLeft: 10,
      marginRight: 10}}/>
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
            }}

            centerOffset={{ x: 0, y: 0 }}
            anchor={{ x: 0.69, y: 1 }}
            image= {this.state.marker1 ? flagBlueImg : flagBlueImg}
          >

                      <Text style={styles.marker}></Text>

          </MapView.Marker>
      </MapView>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.description}>Davis Square</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.davisETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
            <Text style={styles.description}>Campus Center</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.ccETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
          <View style={styles.borderStyle} />
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <Text style={styles.description}>Olin Hall</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
              <Text style={styles.timeDigit}>{this.state.olinETA}</Text>
              <Text style={styles.time}> min</Text>
            </View>
          </View>
        </View>
    </ArticleCard>

      </ScrollView>
       <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./assets/images/backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
        </View>


    );
  }
}

export default ShuttlePage;