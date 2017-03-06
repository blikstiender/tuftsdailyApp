import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: props.currentTab,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentTab: nextProps.currentTab,
    })
  }

  tabPressed(tab, e) {
    this.props.onTabPressed(tab, e);
  }

  tabStyle(tab) {
    if (this.state.currentTab == tab) {
      return [styles.navTab, styles.activeNavTab];
    }
    else {
      return styles.navTab;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.tabs.map(tab => {
          return (
            <TouchableOpacity style={this.tabStyle(tab)}
                              onPress={e => this.tabPressed(tab, e)}>
              <Text style={styles.textStyle}>{tab}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navTab: {
    flexBasis: 0,
    flexGrow: 1,
    padding: 8,
  },
  activeNavTab: {
    borderTopWidth: 3,
    borderTopColor: '#67A1D1',
    paddingTop: 5,
  },
	textStyle: {
		fontFamily: 'Superclarendon',
    fontSize: 13,
    textAlign: 'center'
	},
  navigatorStyle: {
    height: 20,
    width: 20,
  },
});
