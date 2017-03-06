import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MenuSection extends Component {

        renderFoods() {
                return this.props.foods.map(item => 
                        <View key={item}><Text>{item}</Text></View>);
        }
        render() {
                return (
                        <View>{this.renderFoods()}</View>
                )
        }

}