// Import libraries for making a componenet
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ArticlesList from './ArticlesList';
import FullOpinionsList from './FullOpinionsList';

// Make a component
class SubHeader extends Component {
  state={todayPressStatus: true, topPressStatus: false, opinionsPressStatus: false};

  renderArticles() {
    if (this.state.opinionsPressStatus) {
      return(
        <FullOpinionsList />
      )
    }
    else if (this.state.todayPressStatus) {
      return (
        <ArticlesList />
      )
    }
    else {
      return (
        <ArticlesList />
      )
    }
  }
  render() {
  return (
    <View>
    <View style={styles.viewStyle}>
      <TouchableOpacity
        onPress={() => this.setState({ todayPressStatus: true, topPressStatus: false, opinionsPressStatus: false })}
        style={this.state.todayPressStatus ? styles.borderStyle : styles.noBorderStyle }
      >
        <Text style={{ fontSize: 13 }}>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.setState({ todayPressStatus: false, topPressStatus: true, opinionsPressStatus: false })}
        style={this.state.topPressStatus ? styles.borderStyle : styles.noBorderStyle }
      >
        <Text style={{ fontSize: 13 }}>Top Stories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => this.setState({ todayPressStatus: false, topPressStatus: false, opinionsPressStatus: true })}
        style={this.state.opinionsPressStatus ? styles.borderStyle : styles.noBorderStyle }
      >
        <Text style={{ fontSize: 13 }}>Opinion</Text>
      </TouchableOpacity>
    </View>
    <View>
      {this.renderArticles()}
    </View>
  </View>
  );
}
};

const styles = {
  viewStyle: {
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10
  },
	textStyle: {
		fontSize: 20
	},
  navigatorStyle: {
    height: 20,
    width: 20,
  },
  borderStyle: {
    borderTopColor: '#67A1D1',
    borderTopWidth: 2
  },
  noBorderStyle: {

  }
};

//Make the componenet available to other parts of the app
export default SubHeader;
