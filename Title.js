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