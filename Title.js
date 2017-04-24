import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

let styles;

export default class Title extends Component {
  constructor(props) {
    super(props);
    let fontSize = this.props.fontSize ? this.props.fontSize : 22;
    this.state = {
      smallSize: fontSize,
      bigSize: fontSize * 1.3,
      page: this.props.page ? this.props.page : 'home'
    }

    styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: this.state.bigSize - 7,
      },
      big: {
        fontSize: this.state.bigSize,
        height: this.state.bigSize - 0.5,
        fontFamily: 'SortsMillGoudy-Regular',
      },
      small: {
        fontSize: this.state.smallSize,
        height: this.state.smallSize,
        fontFamily: 'SortsMillGoudy-Regular',
      },
    });
  }
  render() {
    if (this.state.page == 'home') {
    return (
      <View style={styles.container}>
        <Text style={ styles.big }>T</Text>
        <Text style={ styles.small }>HE </Text>

        <Text style={ styles.big }>T</Text>
        <Text style={ styles.small }>UFTS </Text>

        <Text style={ styles.big }>D</Text>
        <Text style={ styles.small }>AILY </Text>
      </View>
      )
    }
    else if (this.state.page == 'news') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>N</Text>
        <Text style={ styles.small }>EWS </Text>
      </View>
    )
    }
    else if (this.state.page == 'features') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>F</Text>
        <Text style={ styles.small }>EATURES </Text>
      </View>
    )
    }
    else if (this.state.page == 'opinion') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>O</Text>
        <Text style={ styles.small }>PINION </Text>
      </View>
    )
    }
    else if (this.state.page == 'arts') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>A</Text>
        <Text style={ styles.small }>RTS </Text>
      </View>
    )
    }
    else if (this.state.page == 'sports') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>S</Text>
        <Text style={ styles.small }>PORTS </Text>
      </View>
    )
    }
    else if (this.state.page == 'menus') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>D</Text>
        <Text style={ styles.small }>INING </Text>
        <Text style={ styles.big }>M</Text>
        <Text style={ styles.small }>ENUS </Text>
      </View>
    )
    }
    else if (this.state.page == 'about') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>A</Text>
        <Text style={ styles.small }>BOUT </Text>
      </View>
    )
    }
    else if (this.state.page == 'contact') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>C</Text>
        <Text style={ styles.small }>ONTACT </Text>
      </View>
    )
    }
    else if (this.state.page == 'donate') {
      return (
      <View style={styles.container}>
        <Text style={ styles.big }>D</Text>
        <Text style={ styles.small }>ONATE</Text>
      </View>
    )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={ styles.big }>T</Text>
          <Text style={ styles.small }>HE </Text>

          <Text style={ styles.big }>T</Text>
          <Text style={ styles.small }>UFTS </Text>

          <Text style={ styles.big }>D</Text>
          <Text style={ styles.small }>AILY </Text>
        </View>
        )
    }
  }
}
