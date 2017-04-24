import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking, Share } from 'react-native';
import ArticleCardImg from './ArticleCardImg';
import ArticleCard from './ArticleCard';
import MainHeader from './MainHeader';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Images from 'assets';

class ContactPage extends Component {
  constructor(props) {
    super(props);
  }

render() {
  const goBack = () => Actions.pop();
  return (
    <View style={{ height: windowSize.height}}>
      <MainHeader page="contact" />
      <ArticleCard>
        <View style={{ backgroundColor: 'white', marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
    <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:online@tuftsdaily.com')} style={{ paddingTop: 25}}>
     <Text style={styles.descriptionTextStyle}>online@tuftsdaily.com</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={() => Linking.openURL('mailto:news@tuftsdaily.com')} style={{ paddingTop: 25}}>
    <Text style={styles.descriptionTextStyle}>news@tuftsdaily.com</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Linking.openURL('mailto:features@tuftsdaily.com')} style={{ paddingTop: 25}}>
   <Text style={styles.descriptionTextStyle}>features@tuftsdaily.com</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={() => Linking.openURL('mailto:arts@tuftsdaily.com')} style={{ paddingTop: 25}}>
  <Text style={styles.descriptionTextStyle}>arts@tuftsdaily.com</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => Linking.openURL('mailto:opinion@tuftsdaily.com')} style={{ paddingTop: 25}}>
 <Text style={styles.descriptionTextStyle}>opinion@tuftsdaily.com</Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={() => Linking.openURL('mailto:sports@tuftsdaily.com')} style={{ paddingTop: 25}}>
<Text style={styles.descriptionTextStyle}>sports@tuftsdaily.com</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('mailto:multimedia@tuftsdaily.com')} style={{ paddingTop: 25}}>
<Text style={styles.descriptionTextStyle}>multimedia@tuftsdaily.com</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('mailto:photos@tuftsdaily.com')} style={{ paddingTop: 25}}>
<Text style={styles.descriptionTextStyle}>photos@tuftsdaily.com</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('mailto:business@tuftsdaily.com')} style={{ paddingTop: 25}}>
<Text style={styles.descriptionTextStyle}>business@tuftsdaily.com</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => Linking.openURL('mailto:daily@tuftsdaily.com')} style={{ paddingTop: 25}}>
<Text style={styles.descriptionTextStyle}>daily@tuftsdaily.com</Text>
</TouchableOpacity>
    </ScrollView>
  </View>
    </ArticleCard>
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
  </View>
  )
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
    fontSize: 16,
    color: 'blue',
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
