import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking, Share } from 'react-native';
import ArticleCardImg from './ArticleCardImg';
import ArticleCard from './ArticleCard';
import MainHeader from './MainHeader';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Images from 'assets';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};
  }
  componentWillMount() {
    this.Mounted = true;
    this.fetchContent();
  }

  componentWillUnmount() {
    this.Mounted = false;
  }


  async fetchContent() {
      try {
        let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/pages?name=about');
        let responseJson = await response.json();
        if (this.Mounted) {
          this.setState({ content: responseJson[0].content.rendered });
        }
      } catch(error) {
        console.error(error);
      }
    }


render() {
  const goBack = () => Actions.pop();
  if (this.props.isLoading) {
    return (
      <Text></Text>
    )
  }
  else {
  return (
    <View style={{ height: windowSize.height}}>
      <MainHeader page="about" />

        <View style={{ backgroundColor: 'white', paddingTop: 12}}>
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={{ marginLeft: 8, marginRight: 8 }}>
          <Text style={styles.descriptionTextStyle}><HTMLView value={ this.state.content }/></Text>
        </View>
    </ScrollView>
  </View>
  
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
  </View>
  )
}
}
}

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

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
    fontSize: 14,
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

export default AboutPage;
