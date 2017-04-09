'use strict';
import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { Actions } from 'react-native-router-flux';
import MenuSection from './MenuSection';
import MealHeader from './MealHeader';
import ArticleCard from './ArticleCard';
var moment = require('moment');
import Images from './assets';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diningHallTabs: ['Dewick', 'Carmichael'],
      mealTabs: ['BREAKFAST', 'LUNCH', 'DINNER'],
      currentDiningHallTab: 'Dewick',
      currentMealTab: moment().hour() < 11 ? 'BREAKFAST' : moment().hour() < 16 ? 'LUNCH' : 'DINNER',
      food: [],
      isLoading: true,
      animating: true
    }
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchMenu();

  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  closeActivityIndicator() {
        setTimeout(() => {
           this.setState({animating: false});
        }, 2000);
     }
     componentDidMount() {
        this.closeActivityIndicator();
     }

     async fetchMenu() {
         try {
           let response = await fetch('https://tuftsdaily.com/wp-json/pounce-json/dining');
           let responseJson = await response.json();
           if (this.Mounted) {
             this.setState({ food: responseJson, isLoading: false });
           }
         } catch(error) {
           console.error(error);
         }
       }

  renderFood() {
    switch (this.state.currentDiningHallTab) {
  case 'Dewick':
    switch (moment().day()) {
      case 0:
        switch (this.state.currentMealTab) {
          case 'BREAKFAST':
            return (
              <View style={{ height: windowSize.height, }}>
                <Text style={{ paddingLeft: 10, fontSize: 16, textAlign: 'center', paddingTop: 150 }}>No breakfast on Sundays</Text>
              </View>
            )

            case 'LUNCH':
            return this.state.food[0].meals[0].items.map(foods =>
              <View key={foods.section_name} style={{ paddingBottom: 10 }}>
                <MenuSection title={foods.section_name} foods={foods.food_items} />
              </View>
            );
            case 'DINNER':
            return this.state.food[0].meals[1].items.map(foods =>
              <View key={foods.section_name} style={{ paddingBottom: 10 }}>
                <MenuSection title={foods.section_name} foods={foods.food_items} />
              </View>
            );
    }
    default:
    switch (this.state.currentMealTab) {
      case 'BREAKFAST':
        return this.state.food[0].meals[0].items.map(foods =>
          <View key={foods.section_name} style={{ paddingBottom: 10 }}>
            <MenuSection title={foods.section_name} foods={foods.food_items} />
          </View>
        );
        case 'LUNCH':
        return this.state.food[0].meals[1].items.map(foods =>
          <View key={foods.section_name} style={{ paddingBottom: 10 }}>
            <MenuSection title={foods.section_name} foods={foods.food_items} />
          </View>
        );
        case 'DINNER':
        return this.state.food[0].meals[2].items.map(foods =>
          <View key={foods.section_name} style={{ paddingBottom: 10 }}>
            <MenuSection title={foods.section_name} foods={foods.food_items} />
          </View>
        );
      }
    }

      case 'Carmichael':
      switch (moment().day()) {
        case 6:
          switch (this.state.currentMealTab) {
            case 'BREAKFAST':
              return (
                <View style={{ height: windowSize.height, }}>
                  <Text style={{ paddingLeft: 10, fontSize: 16, textAlign: 'center', paddingTop: 150 }}>No breakfast on Saturdays</Text>
                </View>
              )

              case 'LUNCH':
              return this.state.food[1].meals[0].items.map(foods =>
                <View key={foods.section_name} style={{ paddingBottom: 10 }}>
                  <MenuSection title={foods.section_name} foods={foods.food_items} />
                </View>
              );
              case 'DINNER':
              return this.state.food[1].meals[1].items.map(foods =>
                <View key={foods.section_name} style={{ paddingBottom: 10 }}>
                  <MenuSection title={foods.section_name} foods={foods.food_items} />
                </View>
              );
      }
      default:
      switch (this.state.currentMealTab) {
        case 'BREAKFAST':
          return this.state.food[1].meals[0].items.map(foods =>
            <View key={foods.section_name} style={{ paddingBottom: 10 }}>
              <MenuSection title={foods.section_name} foods={foods.food_items} />
            </View>
          );
          case 'LUNCH':
          return this.state.food[1].meals[1].items.map(foods =>
            <View key={foods.section_name} style={{ paddingBottom: 10 }}>
              <MenuSection title={foods.section_name} foods={foods.food_items} />
            </View>
          );
          case 'DINNER':
          return this.state.food[1].meals[2].items.map(foods =>
            <View key={foods.section_name} style={{ paddingBottom: 10 }}>
              <MenuSection title={foods.section_name} foods={foods.food_items} />
            </View>
          );
        }

    }

  }
}

  handleDiningHallTabPressed(tab, e) {
    this.setState({
      currentDiningHallTab: tab,
    });
  }

  handleMealTabPressed(tab, e) {
    this.setState({
      currentMealTab: tab,
    });
  }

  render() {
    const goBack = () => Actions.pop();
    // const goToPageTwo = () => Actions.fullOpinionsList();
    if (this.state.isLoading) {
    //  console.log('waddup')
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Jumbo is getting your menus</Text>
          <ActivityIndicator
            style={{ paddingTop: 15 }}
            size="large"
        />
        <TouchableOpacity onPress={goBack} /*onPress={goToSectionList}*/ style={{position: 'absolute', left: 15, bottom: 50, justifyContent: 'center'}}>
          <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
        </TouchableOpacity>
        </View>
      )
    }
    //console.log('Hi')
    return (
      <View style={{ flex: 2, backgroundColor: '#f7f7f7' }}>
        <ScrollView
          style={styles.background}
          stickyHeaderIndices={[0]}
        >
          <View style={{ backgroundColor: '#f7f7f7'}}>
          <MainHeader page='menus'/>
          <SubHeader tabs={this.state.diningHallTabs}
                     currentTab={this.state.currentDiningHallTab}
                     onTabPressed={(tab, e) => this.handleDiningHallTabPressed(tab, e)}/>
          </View>
          <ArticleCard>
            <View style={{ backgroundColor: 'white'}}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('./assets/images/forkknife.jpg')} style={{ height: 24, width: 24, marginLeft: 10 }} />
                <Text style={{ fontSize: 20, fontFamily: 'Superclarendon', paddingLeft: 10, paddingTop: 10 }}>TODAY</Text>
              </View>
              <View style={styles.borderStyle} />
            </View>
            <View style={{ paddingTop: 10, backgroundColor: 'white' }}>
          {this.renderFood()}
        </View>
        </ArticleCard>
        </ScrollView>
        <TouchableOpacity onPress={goBack} /*onPress={goToSectionList}*/ style={{position: 'absolute', left: 15, bottom: 50, justifyContent: 'center'}}>
          <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
        </TouchableOpacity>
        <View style={{ backgroundColor: 'white'}}>
        <MealHeader tabs={this.state.mealTabs}
                   currentTab={this.state.currentMealTab}
                   onTabPressed={(tab, e) => this.handleMealTabPressed(tab, e)}/>
      </View>
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
    backgroundColor: '#F8F8F8',
    flexDirection: 'column'
  },
  navBar: {
    backgroundColor: '#0000FF',
  },
  borderStyle: {
    paddingTop: 10,
    //paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: 'black',
    height: 5,
    marginLeft: 10,
    marginRight: 10

  }
});


/*class Menus extends Component {
  constructor() {
    super();
    this.state = { dewickBreakfast: [], isLoading: true };

  }

  componentWillMount() {
    this.fetchMenu();

  }

  fetchMenu() {
    fetch("https://tuftsdaily.com/wp-json/pounce-json/dining?date=4%2F8%2F2017")
    .then((response) => response.json())
    .then((responseData) => { this.setState({ food: responseData isLoading: false });
      console.log('yooooo')
      console.log(this.state);
    //  console.log(Object.keys(responseData.data.Breakfast).length)
  })
    .catch((error) => {
      console.log(error);
    })
    .done();
      }

    renderBreakfast() {
      return this.state.dewickBreakfast.map(foods =>
        <View key={foods.section_name} style={{ paddingBottom: 10 }}>
          <MenuSection title={foods.section_name} foods={foods.food_items} />
        </View>
      );
    }
    render () {
      if (this.state.isLoading) {
        console.log('waddup')
        return (
          <Text>Hi</Text>
        )
      }
      console.log(this.state.dewickBreakfast)
      return (
        <View style={{ paddingTop: 100 }}>
        {this.renderBreakfast()}
      </View>
      )
    }
  }

    export default Menus;*/
