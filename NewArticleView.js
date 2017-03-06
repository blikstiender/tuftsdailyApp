import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import ArticleCardImg from './ArticleCardImg';
import ArticleCardArt from './ArticleCardArt';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
var moment = require('moment');
var REQUEST_MEDIA_URL = "https://tuftsdaily.com/wp-json/wp/v2/media/"

class NewArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: props.article.author, isLoading: true, hasImage: false, date: props.article.date};
  }
  componentWillMount() {
    this.fetchAuthor();
    this.parseDate();
    if (this.props.article.featured_media == 0) {
      this.setState({ isLoading: false })
    }
    else {
      this.fetchImage();
    }
  }
  parseDate(){
    var fdate = moment(this.state.date, "YYYY-MM-DD").format("MMM D YYYY");
    this.setState({date: fdate})
    //console.log(this.state);
  }

  // setURL() {
  //
  //   return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + (this.props.article.featured_media).toString());
  // }

  fetchImage() {
    if(this.props.article.featured_media != 0){
            REQUEST_MEDIA_URL = REQUEST_MEDIA_URL + this.props.article.featured_media
            console.log(REQUEST_MEDIA_URL)
            //fetch(REQUEST_MEDIA_URL)
            fetch("https://tuftsdaily.com/wp-json/wp/v2/media/" + this.props.article.featured_media)
                .then((response) => response.json())
                .then((responseData) => {
                  console.log(responseData)
                  this.setState({hasImage: true, imageID: responseData.media_details.sizes.medium.source_url})
                  //console.log(this.state);
                })
                .catch((error) => {
                  console.log(error);
                })
                .done();

          }
  }

  setAuthorURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/users/' + this.props.article.author)
  }

  fetchAuthor() {
    fetch(this.setAuthorURL())
      .then((response) => response.json())
      .then((responseData) => {
        var authorname = responseData.name
        this.setState({ authorID: authorname.toUpperCase(), isLoading: false });
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }

render() {
  const goBack = () => Actions.pop();
  if (this.props.isLoading) {
    return (
      <Text></Text>
    )
  }
else {
  if(this.state.hasImage == true){
    //console.log("image")
return (
  <View>
  <ScrollView style={{ marginTop: 20 }}>
    <ArticleCardImg>
      <View style={{ marginBottom: 10, }}>
        <Image
          style={styles.imageStyle}
          source={{uri: this.state.imageID }}
        />
      </View>
    </ArticleCardImg>
    <ArticleCardArt>
      <View style={{ marginLeft: 8, marginRight: 8 }}>
        <Text style={styles.headerTextStyle}>
          <HTMLView value={ this.state.title } />
        </Text>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID} | {this.state.date}</Text>
        <Text style={styles.descriptionTextStyle}>
          <HTMLView
            value={ this.props.article.content.rendered }
            onLinkPress={(url) => Linking.openURL.call(Linking, url)}
          />
        </Text>
      </View>
    </ArticleCardArt>
  </ScrollView>
  <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
  <TouchableOpacity style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./blackhearticon.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
  <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 100, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./shareicon.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
</View>
)}
else{
  //console.log("hi no image");
//  console.log(this.state)
  return (
    <View>
    <ScrollView style={{ marginTop: 20 }}>
      <ArticleCardArt>
        <View style={{ marginLeft: 8, marginRight: 8 }}>
          <Text style={styles.headerTextStyle}><HTMLView value={ this.state.title } /></Text>
          <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID} | {this.state.date}</Text>
          <Text style={styles.descriptionTextStyle}><HTMLView value={ this.props.article.content.rendered } /></Text>
        </View>
      </ArticleCardArt>
    </ScrollView>
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={require('./backarrow.png')} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={require('./blackhearticon.png')} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 100, bottom: 10, justifyContent: 'center'}}>
      <Image source={require('./shareicon.png')} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
  </View>
  )
}
}
}
}

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center',
    paddingBottom: 5,

  },

  descriptionTextStyle: {
    fontSize: 12,
    color: '#696969',
    fontFamily: 'Avenir',
    marginBottom: 10
  },

  imageStyle: {
    left: 0,
    height: 250,
    width: windowSize.width,
    flex: 1,

  },
  iconStyle: {
    height: 12,
    width: 12
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 8,
    marginRight: 8

  }
};

export default NewArticleView;
