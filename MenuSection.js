import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class MenuSection extends Component {

  fixCaps(word) {
          return word.toLowerCase().replace( /\b\w/g, function (m) {
              return m.toUpperCase();
          });
      };

        renderFoods() {
                return this.props.foods.map(item =>
                        <View key={item} style={{ flexWrap: 'wrap', paddingRight: 10 }}><Text style={{ fontSize: 12 }}>{item}</Text></View>);
        }
        render() {
        //  console.log(this.props)
                return (
                  <View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ width: windowSize.width*.40, textAlign: 'right', paddingLeft: 20, color: '#4e4e4e', fontFamily: 'Superclarendon', fontSize: 10 }}>{this.fixCaps(this.props.title)}</Text>
                    <View style={{ paddingLeft: 20, flex: 1, }}>{this.renderFoods()}</View>
                  </View>
                  <View style={styles.borderStyle} />
                </View>
                )
        }

}

const styles = StyleSheet.create({
  borderStyle: {
    paddingTop: 10,
    //paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 20,
    marginRight: 20

  }
});

export default MenuSection;
