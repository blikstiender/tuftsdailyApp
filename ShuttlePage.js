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

const joeyRoute = [
{latitude: 42.405804, longitude: -71.11956},
{latitude: 42.405838, longitude: -71.11953},
{ latitude: 42.4057, longitude: -71.119195},
{ latitude: 42.405662, longitude: -71.119103},
{ latitude: 42.405559, longitude: -71.118584},
{ latitude: 42.405555, longitude: -71.11834},
{ latitude: 42.405555, longitude: -71.118279},
{ latitude: 42.405555, longitude: -71.118264},
{ latitude: 42.405559, longitude: -71.118134},
{ latitude: 42.405574, longitude: -71.118012},
{ latitude: 42.405574, longitude: -71.118012},
{ latitude: 42.405639, longitude: -71.117447},
{ latitude: 42.405433, longitude: -71.117409},
{ latitude: 42.40533, longitude: -71.117394},
{ latitude: 42.404853, longitude: -71.117325},
{ latitude: 42.404014, longitude: -71.117203},
{ latitude: 42.403877, longitude: -71.11718},
{ latitude: 42.403842, longitude: -71.117173},
{ latitude: 42.403335, longitude: -71.117089},
{ latitude: 42.402729, longitude: -71.116997},
{ latitude: 42.402038, longitude: -71.116921},
{ latitude: 42.401943, longitude: -71.116898},
{ latitude: 42.401943, longitude: -71.116898},
{ latitude: 42.40158, longitude: -71.116829},
{ latitude: 42.401447, longitude: -71.11686},
{ latitude: 42.401332, longitude: -71.116936},
{ latitude: 42.401294, longitude: -71.116997},
{ latitude: 42.401248, longitude: -71.117028},
{ latitude: 42.401176, longitude: -71.117074},
{ latitude: 42.401103, longitude: -71.117074},
{ latitude: 42.401042, longitude: -71.117051},
{ latitude: 42.400985, longitude: -71.117005},
{ latitude: 42.400981, longitude: -71.116997},
{ latitude: 42.400974, longitude: -71.116982},
{ latitude: 42.400814, longitude: -71.117112},
{ latitude: 42.400737, longitude: -71.117142},
{ latitude: 42.400684, longitude: -71.117165},
{ latitude: 42.400588, longitude: -71.117226},
{ latitude: 42.400371, longitude: -71.117539},
{ latitude: 42.400119, longitude: -71.11789},
{ latitude: 42.399902, longitude: -71.118218},
{ latitude: 42.399894, longitude: -71.118226},
{ latitude: 42.399684, longitude: -71.118516},
{ latitude: 42.399433, longitude: -71.118912},
{ latitude: 42.399219, longitude: -71.119362},
{ latitude: 42.399066, longitude: -71.119729},
{ latitude: 42.39904, longitude: -71.119782},
{ latitude: 42.398712, longitude: -71.120568},
{ latitude: 42.398609, longitude: -71.120743},
{ latitude: 42.398529, longitude: -71.120896},
{ latitude: 42.398387, longitude: -71.121087},
{ latitude: 42.398265, longitude: -71.121232},
{ latitude: 42.398132, longitude: -71.121316},
{ latitude: 42.39793, longitude: -71.12143},
{ latitude: 42.397544, longitude: -71.121651},
{ latitude: 42.397472, longitude: -71.121689},
{ latitude: 42.397026, longitude: -71.121964},
{ latitude: 42.396728, longitude: -71.122155},
{ latitude: 42.39672, longitude: -71.122162},
{ latitude: 42.396701, longitude: -71.122178},
{ latitude: 42.396682, longitude: -71.122185},
{ latitude: 42.396575, longitude: -71.122254},
{ latitude: 42.396575, longitude: -71.122254},
{ latitude: 42.396488, longitude: -71.122307},
{ latitude: 42.396625, longitude: -71.122559},
{ latitude: 42.396808, longitude: -71.12278},
{ latitude: 42.397022, longitude: -71.122933},
{ latitude: 42.397087, longitude: -71.122979},
{ latitude: 42.397212, longitude: -71.123093},
{ latitude: 42.397342, longitude: -71.1232},
{ latitude: 42.397342, longitude: -71.1232},
{ latitude: 42.39764, longitude: -71.123452},
{ latitude: 42.397708, longitude: -71.123505},
{ latitude: 42.397918, longitude: -71.123673},
{ latitude: 42.398174, longitude: -71.123887},
{ latitude: 42.398517, longitude: -71.124161},
{ latitude: 42.399032, longitude: -71.124566},
{ latitude: 42.399162, longitude: -71.12468},
{ latitude: 42.399459, longitude: -71.124917},
{ latitude: 42.399856, longitude: -71.125237},
{ latitude: 42.400405, longitude: -71.125672},
{ latitude: 42.400424, longitude: -71.125687},
{ latitude: 42.400356, longitude: -71.125763},
{ latitude: 42.400356, longitude: -71.125763},
{ latitude: 42.400424, longitude: -71.125687},
{ latitude: 42.401039, longitude: -71.126145},
{ latitude: 42.401054, longitude: -71.12616},
{ latitude: 42.401138, longitude: -71.126198},
{ latitude: 42.401771, longitude: -71.126503},
{ latitude: 42.402431, longitude: -71.126786},
{ latitude: 42.402824, longitude: -71.126977},
{ latitude: 42.402824, longitude: -71.126977},
{ latitude: 42.402877, longitude: -71.126999},
{ latitude: 42.402931, longitude: -71.126984},
{ latitude: 42.402976, longitude: -71.1269},
{ latitude: 42.403015, longitude: -71.126816},
{ latitude: 42.403022, longitude: -71.126725},
{ latitude: 42.402996, longitude: -71.126587},
{ latitude: 42.402946, longitude: -71.126473},
{ latitude: 42.402637, longitude: -71.125748},
{ latitude: 42.402629, longitude: -71.125718},
{ latitude: 42.402355, longitude: -71.125115},
{ latitude: 42.402282, longitude: -71.124947},
{ latitude: 42.40224, longitude: -71.12484},
{ latitude: 42.40203, longitude: -71.124329},
{ latitude: 42.401851, longitude: -71.123742},
{ latitude: 42.401638, longitude: -71.122941},
{ latitude: 42.401557, longitude: -71.122628},
{ latitude: 42.401454, longitude: -71.122216},
{ latitude: 42.401329, longitude: -71.12175},
{ latitude: 42.401264, longitude: -71.121445},
{ latitude: 42.401096, longitude: -71.120728},
{ latitude: 42.40092, longitude: -71.120003},
{ latitude: 42.40092, longitude: -71.120003},
{ latitude: 42.400909, longitude: -71.119957},
{ latitude: 42.400897, longitude: -71.119896},
{ latitude: 42.400844, longitude: -71.119576},
{ latitude: 42.400798, longitude: -71.119088},
{ latitude: 42.400798, longitude: -71.119011},
{ latitude: 42.400794, longitude: -71.11876},
{ latitude: 42.400825, longitude: -71.118088},
{ latitude: 42.400859, longitude: -71.117325},
{ latitude: 42.400871, longitude: -71.117241},
{ latitude: 42.400981, longitude: -71.116997},
{ latitude: 42.400974, longitude: -71.116982},
{ latitude: 42.400936, longitude: -71.116921},
{ latitude: 42.400905, longitude: -71.116692},
{ latitude: 42.400909, longitude: -71.116684},
{ latitude: 42.40092, longitude: -71.116669},
{ latitude: 42.401004, longitude: -71.116494},
{ latitude: 42.401081, longitude: -71.11644},
{ latitude: 42.401123, longitude: -71.116433},
{ latitude: 42.401161, longitude: -71.116433},
{ latitude: 42.401187, longitude: -71.11644},
{ latitude: 42.401218, longitude: -71.116448},
{ latitude: 42.40126, longitude: -71.116478},
{ latitude: 42.40129, longitude: -71.116509},
{ latitude: 42.401313, longitude: -71.11654},
{ latitude: 42.401382, longitude: -71.116608},
{ latitude: 42.401439, longitude: -71.116669},
{ latitude: 42.40158, longitude: -71.116829},
{ latitude: 42.402038, longitude: -71.116921},
{ latitude: 42.402729, longitude: -71.116997},
{ latitude: 42.403335, longitude: -71.117089},
{ latitude: 42.403842, longitude: -71.117173},
{ latitude: 42.403877, longitude: -71.11718},
{ latitude: 42.404014, longitude: -71.117203},
{ latitude: 42.404853, longitude: -71.117325},
{ latitude: 42.404773, longitude: -71.117943},
{ latitude: 42.404769, longitude: -71.118004},
{ latitude: 42.404754, longitude: -71.118294},
{ latitude: 42.404758, longitude: -71.118363},
{ latitude: 42.404758, longitude: -71.118363},
{ latitude: 42.404762, longitude: -71.118523},
{ latitude: 42.404766, longitude: -71.118569},
{ latitude: 42.404769, longitude: -71.118706},
{ latitude: 42.404773, longitude: -71.118744},
{ latitude: 42.404819, longitude: -71.119088},
{ latitude: 42.404937,  longitude: -71.119545},
{ latitude: 42.404949, longitude: -71.119576},
{ latitude: 42.405002, longitude: -71.119729},
{ latitude: 42.405075, longitude: -71.119912},
{ latitude: 42.405143, longitude: -71.120102},
{ latitude: 42.4052, longitude: -71.120247},
{ latitude: 42.405403, longitude: -71.120812},
{ latitude: 42.40541, longitude: -71.120804},
{ latitude: 42.405696, longitude: -71.120614},
{ latitude: 42.405696, longitude: -71.120614},
{ latitude: 42.406139, longitude: -71.120324},
{ latitude: 42.406352, longitude: -71.120881},
{ latitude: 42.406742, longitude: -71.121911},
{ latitude: 42.40718, longitude: -71.123063},
{ latitude: 42.407318, longitude: -71.123421},
{ latitude: 42.407318, longitude: -71.123421},
{ latitude: 42.40768, longitude: -71.124375},
{ latitude: 42.407978, longitude: -71.124177},
{ latitude: 42.408294, longitude: -71.123948},
{ latitude: 42.408355, longitude: -71.123917},
{ latitude: 42.408462, longitude: -71.123848},
{ latitude: 42.408767, longitude: -71.123635},
{ latitude: 42.408931, longitude: -71.123536},
{ latitude: 42.409191, longitude: -71.12336},
{ latitude: 42.409301, longitude: -71.123284},
{ latitude: 42.409339, longitude: -71.123261},
{ latitude: 42.409283, longitude: -71.123128},
{ latitude: 42.409759, longitude: -71.12257},
{ latitude: 42.409394, longitude: -71.121926},
{ latitude: 42.409109, longitude: -71.122012},
{ latitude: 42.408412, longitude: -71.120853},
{ latitude: 42.408424, longitude: -71.12085},
{ latitude: 42.408393, longitude: -71.120797},
{ latitude: 42.408329, longitude: -71.120842},
{ latitude: 42.408206, longitude: -71.120926},
{ latitude: 42.408092, longitude: -71.121003},
{ latitude: 42.407962, longitude: -71.121087},
{ latitude: 42.407703, longitude: -71.121262},
{ latitude: 42.407501, longitude: -71.121392},
{ latitude: 42.407356, longitude: -71.121483},
{ latitude: 42.407302, longitude: -71.121521},
{ latitude: 42.407302, longitude: -71.121521},
{ latitude: 42.407085, longitude: -71.121666},
{ latitude: 42.406963, longitude: -71.12175},
{ latitude: 42.406742, longitude: -71.121911},
{ latitude: 42.406352, longitude: -71.120881},
{ latitude: 42.406139,longitude: -71.120324},
{ latitude: 42.406105, longitude: -71.120232},
{ latitude: 42.405879, longitude: -71.119637},
{ latitude: 42.405857, longitude: -71.119576}
]

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
    currentTab: 'Davis Sq', polylines: [] };

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
                      <MapView.Polyline
              //key={polyline.id}
              coordinates={joeyRoute}
              strokeColor="rgb(5,0,255)"
              //fillColor="rgba(255,0,0,0.5)"
              //strokeWidth={1}
            />
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