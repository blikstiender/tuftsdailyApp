'use strict';
 
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';
import MenuSection from './MenuSection';



var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#000000'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },

});


function menuList(items) {
  return items.map(x => (<li key={x}>{x}</li>));
}

function MenuCategory(menuCat, menuObject) {
  console.log("Rendering: ",menuObject[menuCat]);
  return (
    <Text>
      <h1>{menuCat}</h1>
      <ul>
        <menuList items={menuObject[menuCat]} />
      </ul>
    </Text>
  )
}


class MenuPage extends Component {
  constructor() {
    super();
    this.state = { menu: [], mealSections: [], isLoading: true };

  }

  componentWillMount() {
    this.fetchMenu();

  }

  fetchMenu() {
    fetch("https://tuftsdiningdata.herokuapp.com/menus/carm/27/2/2017")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ menu: responseData.data, breakfastEntrees: responseData.data.Breakfast['BREAKFAST ENTREES'], mealSections: responseData.data.Breakfast, isLoading: false });
      console.log(this.state);
      console.log(Object.keys(responseData.data.Breakfast).length)
  })
    .catch((error) => {
      console.log(error);
    })
    .done();
      }

renderBreakfastEntrees(title) {
  //console.log(this.state.menu.Breakfast[{title}].length)
  console.log(title)
  return this.state.menu.Breakfast[{title}].map(food => {
    return <View style={{ height: 20, width: 200 }} key={food}><Text>{food}</Text></View>
  })
}

renderMenuHeader(title) {
  console.log(title)
  var thing = title;
  return (
    <View>
      <Text>
        {title}
      </Text>
    </View>
    )
}

renderBreakfast() {
  var len = Object.keys(this.state.menu.Breakfast).length;
  console.log(Object.keys(this.state.menu.Breakfast)[0])  
    for (var i = 0; i < len; i++) {
     return (this.renderMenuHeader(Object.keys(this.state.menu.Breakfast)[i]))
    }
}

renderBreakfast2() {
  return (Object.keys(this.state.mealSections).map(foods=> {
    return <MenuSection key={foods[0]} foods = {foods} />
  })
  )
}

renderShit() {
  var i = 0;
  return (Object.keys(this.state.menu.Breakfast)).map(items => {
    i = i + 1;
    return <View key={items}><Text>{items}</Text><View>{this.renderBreakfastEntrees(Object.keys(this.state.menu.Breakfast)[i])}</View></View>
  })
}

  render() {
      const nums = [1, 2, 3]

      if (this.state.isLoading) {
        return (
          <Text>Loading...</Text>
          )
      }
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
        Breakfast Entrees
        </Text>
       {/* <View>{this.renderBreakfastEntrees()}</View>
        <View>{this.renderBreakfast()}</View>
        <View>{this.renderShit()}</View>*/}
        {this.renderBreakfast2()}
        <Text style={styles.description}>

        </Text>
                <Text style={styles.description}>
          This is a FOOD Page
        </Text>
        <Text style={styles.description}>
          Miscellaneous Pages will have 
        </Text>
                <Text style={styles.description}>
          This is a FOOD Page
        </Text>
        <Text style={styles.description}>
          Miscellaneous Pages will have 
        </Text>
                <Text style={styles.description}>
          This is a FOOD Page
        </Text>
        <Text style={styles.description}>
          Miscellaneous Pages will have 
        </Text>
                <Text style={styles.description}>
          This is a FOOD Page
        </Text>
        <Text style={styles.description}>
          Miscellaneous Pages will have 
        </Text>

      </View>
    );
  }
}

export default MenuPage;





