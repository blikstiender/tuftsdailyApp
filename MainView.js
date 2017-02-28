import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { Actions } from 'react-native-router-flux';

export default class MainView extends Component {

  render() {
    const goToPageTwo = () => Actions.fullOpinionsList();
    return (
      <View>
      <ScrollView style={styles.background}>
        <MainHeader />
      <SubHeader />
    </ScrollView>
  </View>
    );
  }
}

const styles = {
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
    backgroundColor: '#0000FF',
  }
};
