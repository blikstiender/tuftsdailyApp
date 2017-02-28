import React, { Component } from 'react';
//import {View} from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Button,
  Image,
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

var REQUEST_URL = "https://tuftsdaily.com/wp-json/wp/v2/posts/";
var REQUEST_URL_2 = "https://tuftsdaily.com/wp-json/wp/v2/users/"
var REQUEST_MEDIA_URL = "https://tuftsdaily.com/wp-json/wp/v2/media/"
class ArticleView extends Component {
    constructor(props){
      super(props);
      this.state = {title: "Loading", content: "", author: "", hasimage: false, image: "", isLoading: true};
    }
    // Automatically called by react when this component has finished mounting.
    componentDidMount () {
      this.fetchData();
    }
    //get data from daily api
    fetchData () {
      fetch(REQUEST_URL + this.props.id)
        .then((response) => response.json())
        .then((responseData) => {
          // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
          this.setState({ title: responseData.title.rendered,
                          content: responseData.content.rendered,
                          author_num: responseData.author,
          });
          if(responseData.featured_media != 0){
            REQUEST_MEDIA_URL = REQUEST_MEDIA_URL + responseData.featured_media
            fetch(REQUEST_MEDIA_URL)
                .then((response) => response.json())
                .then((responseData) => {
                  this.setState({hasimage: true, image: responseData.media_details.sizes.medium.source_url})
                })
          }
          REQUEST_URL_2 = REQUEST_URL_2 + this.state.author_num
      fetch(REQUEST_URL_2)
          .then((response) => response.json())
          .then((responseData) => {
            this.setState({author: "By " + responseData.name, isLoading: false})
              //console.log(responseData)
          })
        })
      .done();
    }
    render (){
      console.log(this.state);
      if (this.state.isLoading) {
        return (
          <Text></Text>
        )
      }
      if(this.state.hasimage){
        console.log("has image")
        console.log(this.state)
      return (

        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
        <Image
          style={ styles.imageStyle }
          source={{ uri:this.state.image }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {this.state.title}
            </Text>
            <Text style ={styles.title}>
              {this.state.author}
            </Text>
            <Text style={styles.text}>
              {this.state.content}
            </Text>
          </View>
        </View>
        </ScrollView>

    );}
    else{
      console.log("no image")
      return(
        <ScrollView >
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              {this.state.title}
            </Text>
            <Text style ={styles.title}>
              {this.state.author}
            </Text>
            <Text style={styles.text}>
              {this.state.title}
              {this.state.title}
              {this.state.title}
            </Text>
          </View>
        </View>
        </ScrollView>
      )
    }
  }
    }

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageStyle: {
    width: windowSize.width,
    height: 250,
  }
};

export default ArticleView;
