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
  ScrollView,
} from 'react-native';
import { Router, Scene, ActionConst } from 'react-native-router-flux';

import MainView from './MainView';
import FirstArticleCard from './FirstArticleCard';
import FullOpinionsList from './FullOpinionsList';
import NewArticleView from './NewArticleView';
import NewsSection from './NewsSection';
import ArtsSection from './ArtsSection';
import OpinionSection from './OpinionSection';
import SportsSection from './SportsSection';
import FeaturesSection from './FeaturesSection';
import SectionList from './SectionList';
import SearchResults from './SearchResults';
import MenuPage from './MenuPage';


export default class tuftsdailyApp extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={MainView} title="The Tufts Daily" initial={true} hideNavBar={true} />
          <Scene key="pageThree" component={NewArticleView} title="The Tufts Daily" hideNavBar={true} />
          <Scene key="sectionList" component={SectionList} hideNavBar={true} direction="leftToRight"/>
          <Scene key="newsSection" component={NewsSection} title="News" hideNavBar={true} />
          <Scene key="artsSection" component={ArtsSection} title="Arts" hideNavBar={true} />
          <Scene key="opinionSection" component={OpinionSection} title="Opinion" hideNavBar={true} />
          <Scene key="sportsSection" component={SportsSection} title="Sports" hideNavBar={true} />
          <Scene key="featuresSection" component={FeaturesSection} title="Features" hideNavBar={true} />
          <Scene key="searchResults" component={SearchResults} title="Results" hideNavBar={true} />
          <Scene key="menus" component={MenuPage} title="Menus" hideNavBar={true} />
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
