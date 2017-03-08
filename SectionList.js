import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
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
    const goToHome = () => Actions.home();
    const goToNews = () => Actions.newsSection();
    const goToOpinions = () => Actions.opinionSection();
    const goToSports = () => Actions.sportsSection();

    return (
      <Image source={Images.screenpic2} style={styles.backgroundStyle}>
        <BlurView blurType="xlight" blurAmount={20} >
          <View style={styles.viewStyle}>
            <View style={{marginTop: 30, marginLeft: 40}}>
            {/*<Text style={styles.searchTextStyle}>Search</Text>*/}
            <TextInput
        style={{height: 40, width: 220}}
        placeholder="Search"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
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
         <TouchableOpacity style={{ paddingTop: 25 }}>
           <Text style={styles.sectionTextStyle}>Features</Text>
         </TouchableOpacity>
        <TouchableOpacity onPress={goToOpinions} style={{ paddingTop: 25}}>
          <Text style={styles.sectionTextStyle}>Opinion</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{ paddingTop: 25}}>
        <Text style={styles.sectionTextStyle}>Arts</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToSports} style={{ paddingTop: 25, paddingBottom: 20}}>
        <Text style={styles.sectionTextStyle}>Sports</Text>
        </TouchableOpacity>
        <View style={styles.borderStyle}>
        </View>
        <TouchableOpacity style={{ paddingTop: 10 }}>
          <Text style={styles.otherTextStyle}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 40, paddingBottom: 10 }}>
          <Text style={styles.otherTextStyle}>Shuttle</Text>
        </TouchableOpacity>
        <View style={styles.borderStyle}>
        </View>
        <TouchableOpacity style={{ paddingTop: 25}}>
       <Text style={styles.otherTextStyle}>About</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{ paddingTop: 25}}>
      <Text style={styles.otherTextStyle}>Advertise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ paddingTop: 25}}>
     <Text style={styles.otherTextStyle}>Contact</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{ paddingTop: 25}}>
    <Text style={styles.otherTextStyle}>Donate</Text>
    </TouchableOpacity>
      </View>
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
