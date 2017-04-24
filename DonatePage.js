import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking, Share } from 'react-native';
import ArticleCardImg from './ArticleCardImg';
import ArticleCard from './ArticleCard';
import MainHeader from './MainHeader';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Images from 'assets';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

render() {
  const goBack = () => Actions.pop();
  return (
    <View style={{ height: windowSize.height}}>
      <MainHeader page="donate" />
      <ArticleCard>
        <View style={{ backgroundColor: 'white', marginBottom: 20, justifyContent: 'center', alignItems: 'center', height: windowSize.height * 0.80 }}>
      <TouchableOpacity onPress={() => Linking.openURL('https://tuftsgiving.org/giving-form.html?id=1&showarea=AR000684&areaid=333&appealcode=A9970')} style={{ paddingTop: 25}}>
     <Text style={styles.descriptionTextStyle}>Donate</Text>
     </TouchableOpacity>
  </View>
    </ArticleCard>
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
  </View>
  )
}
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center',
    paddingBottom: 5,

  },

  descriptionTextStyle: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Avenir',
    marginBottom: 10
  },

  imageStyle: {
    left: 0,
    height: 250,
    width: windowSize.width,
    flex: 1,

  },
  iconStyle: {
    height: 12,
    width: 12
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 8,
    marginRight: 8

  },

  cartoonStyle: {
    width: windowSize.width,
    height: 600 * (windowSize.width / 501),
    flex: 1
  }
}

export default ContactPage;
