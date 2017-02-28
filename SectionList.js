import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SectionList extends Component {
  render() {
    const goBack = () => Actions.pop();
    const goToHome = () => Actions.home();
    const goToNews = () => Actions.newsSection();
    const goToOpinions = () => Actions.opinionSection();
    const goToSports = () => Actions.sportsSection();

    return (
      <View>
        <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 20, top: 30, justifyContent: 'center'}}>
          <Image source={require('./xicon.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <View style={{ marginTop: 80, marginLeft: 10 }}>
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
        <TouchableOpacity onPress={goToSports} style={{ paddingTop: 25}}>
        <Text style={styles.sectionTextStyle}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 25 }}>
          <Text style={styles.sectionTextStyle}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingTop: 25 }}>
          <Text style={styles.sectionTextStyle}>Shuttle</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }
}

const styles = {
  sectionTextStyle: {
    fontSize: 15,
    fontWeight: 'bold'
  }
};

export default SectionList;
