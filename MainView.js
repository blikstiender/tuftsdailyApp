import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { Actions } from 'react-native-router-flux';
import ArticlesList from './ArticlesList';
import FeaturesList from './FeaturesList';
import FullOpinionsList from './FullOpinionsList';

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['Today', 'Features', 'Opinion'],
      currentTab: 'Today'
    }
  }

  renderArticles() {
    switch (this.state.currentTab) {
      case 'Today':
      return (<ArticlesList />);

      case 'Features':
      return (<FeaturesList />);

      case 'Opinion':
      return (<FullOpinionsList />)
    }
  }

  handleTabPressed(tab, e) {
    this.setState({
      currentTab: tab,
    });
  }

  render() {
    // const goToPageTwo = () => Actions.fullOpinionsList();
    return (
      <View >
          <MainHeader />
          <SubHeader tabs={this.state.tabs}
                     currentTab={this.state.currentTab}
                     onTabPressed={(tab, e) => this.handleTabPressed(tab, e)}/>
          <ScrollView contentContainerStyle={styles.background}>
          {this.renderArticles()}
        </ScrollView>
      </View>
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
  //  backgroundColor: '#F8F8F8',
    flexDirection: 'column',
    paddingBottom: 130
  },
  navBar: {
    backgroundColor: '#0000FF',
  }
});
