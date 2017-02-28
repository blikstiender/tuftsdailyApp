/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import MainView from './MainView';
import FirstArticleCard from './FirstArticleCard';
import FullOpinionsList from './FullOpinionsList';
import NewArticleView from './NewArticleView';
import NewsSection from './NewsSection';
import OpinionSection from './OpinionSection';
import SportsSection from './SportsSection';
import SectionList from './SectionList';


export default class tuftsdailyApp extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={MainView} title="The Tufts Daily" initial={true} hideNavBar={true} />
          <Scene key="pageThree" component={NewArticleView} title="The Tufts Daily" hideNavBar={true} />
          <Scene key="sectionList" component={SectionList} hideNavBar={true} />
          <Scene key="newsSection" component={NewsSection} title="News" hideNavBar={false} />
          <Scene key="opinionSection" component={OpinionSection} title="Opinion" hideNavBar={false} />
          <Scene key="sportsSection" component={SportsSection} title="Sports" hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
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
  navStyle: {
    backgroundColor: '#FFFFFF',
    //height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    //position: 'relative',
    //flexDirection: 'row',
    //justifyContent: 'space-between',
    //paddingLeft: 5,
    //paddingRight: 5,
  //  paddingTop: 30,
  //  paddingBottom: 5,
  //  flex:1
  }
});

AppRegistry.registerComponent('tuftsdailyApp', () => tuftsdailyApp);
