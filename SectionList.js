import React, { Component } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BlurView, VibrancyView } from 'react-native-blur';

import Images from 'assets';

class SectionList extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    const goBack = () => Actions.pop();
    const goToSearch = () => {
      this.setState({ text: '' })
      Actions.searchResults(this.state.text);
    }
    const goToHome = () => Actions.home();
    const goToNews = () => Actions.newsSection();
    const goToArts = () => Actions.artsSection();
    const goToOpinions = () => Actions.opinionSection();
    const goToSports = () => Actions.sportsSection();
    const goToFeatures = () => Actions.featuresSection();
    const goToMenus =() => Actions.menus();
    const goToShuttle = () => Actions.shuttle();
    const goToAbout = () => Actions.about();
    const goToContact = () => Actions.contact();
    const goToDonate = () => Linking.openURL('https://tuftsgiving.org/giving-form.html?id=1&showarea=AR000684&areaid=333&appealcode=A9970');

    return (
      <Image source={Images.screenpic2} style={styles.backgroundStyle}>
        <BlurView blurType="xlight" blurAmount={20} >
          <View style={styles.viewStyle}>
            <ScrollView>
            <View style={{marginTop: 30, marginLeft: 40}}>
            <TextInput
        style={{height: 40, width: 220}}
        placeholder="Search"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        onSubmitEditing={goToSearch}
        returnKeyType="search"
      />
    </View>
            <View style={styles.searchBorderStyle}>
            </View>
        <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 20, top: 40, justifyContent: 'center'}}>
          <Image source={Images.xicon} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <View style={{ marginTop: 20, marginLeft: 40 }}>
        <TouchableOpacity onPress={goToHome}>
          <Text style={styles.sectionTextStyle}>Home</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={goToNews} style={{ paddingTop: 25 }}>
           <Text style={styles.sectionTextStyle}>News</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={goToFeatures} style={{ paddingTop: 25 }}>
           <Text style={styles.sectionTextStyle}>Features</Text>
         </TouchableOpacity>
        <TouchableOpacity onPress={goToOpinions} style={{ paddingTop: 25}}>
          <Text style={styles.sectionTextStyle}>Opinion</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={goToArts} style={{ paddingTop: 25}}>
        <Text style={styles.sectionTextStyle}>Arts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSports} style={{ paddingTop: 25, paddingBottom: 20}}>
        <Text style={styles.sectionTextStyle}>Sports</Text>
        </TouchableOpacity>
        <View style={styles.borderStyle}>
        </View>
        <TouchableOpacity onPress={goToMenus} style={{ paddingTop: 10 }}>
          <Text style={styles.otherTextStyle}>Dining Menus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToShuttle} style={{ paddingTop: 40, paddingBottom: 10 }}>
          <Text style={styles.otherTextStyle}>Shuttle</Text>
        </TouchableOpacity>
        <View style={styles.borderStyle}>
        </View>
        <TouchableOpacity onPress={goToAbout} style={{ paddingTop: 25}}>
       <Text style={styles.otherTextStyle}>About</Text>
       </TouchableOpacity>
      <TouchableOpacity onPress={goToContact} style={{ paddingTop: 25}}>
     <Text style={styles.otherTextStyle}>Contact</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={goToDonate} style={{ paddingTop: 25}}>
    <Text style={styles.otherTextStyle}>Donate</Text>
    </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  </BlurView>
  </Image>
    )
  }
}

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const styles = {
  sectionTextStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  otherTextStyle: {
    fontSize: 15,
  },
  searchTextStyle: {
    fontSize: 20,
    color: '#7e7e7e',
    marginTop: 50,
    marginLeft: 40,
    marginBottom: 5
  },
  backgroundStyle: {
    flex: 1,
    width: windowSize.width,
    height: windowSize.height,
  },
  viewStyle : {
    width: windowSize.width,
    height: windowSize.height
  },
  borderStyle: {
    borderBottomWidth: 2,
    borderColor: '#7e7e7e',
    height: 3,
    marginRight: 200,
  },
  searchBorderStyle: {
    borderBottomWidth: 4,
    borderColor: '#545454',
    height: 3,
    marginRight: 100,
    marginLeft: 38
  }
};

export default SectionList;
