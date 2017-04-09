import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking, Share } from 'react-native';
import ArticleCardImg from './ArticleCardImg';
import ArticleCardArt from './ArticleCardArt';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import Images from 'assets';
var moment = require('moment');

class NewArticleView extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: props.article.author, isLoading: true, hasImage: false, date: props.article.date};
  }
  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
    this.parseDate();
    if (this.props.article.featured_media == 0) {
      this.setState({ isLoading: false })
    }
    else {
      this.fetchImage();
    }
  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  parseDate(){
    var fdate = moment(this.state.date, "YYYY-MM-DD").format("MMM D YYYY");
    this.setState({date: fdate})
  }

  async fetchImage() {
    if(this.props.article.featured_media != 0){
      try {
        let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/media/' + this.props.article.featured_media);
        let responseJson = await response.json();
        if (this.Mounted) {
          this.setState({ imageID: responseJson.media_details.sizes.medium.source_url, hasImage: true });
        }
      } catch(error) {
        console.error(error);
      }
    }
  }

  setAuthorURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/users/' + this.props.article.author)
  }

  async fetchAuthor() {
      try {
        let response = await fetch(this.setAuthorURL());
        let responseJson = await response.json();
        if (this.Mounted) {
        this.setState({ authorID: responseJson.name.toUpperCase() });
      }
      } catch(error) {
        console.error(error);
      }
    }

  shareArticle() {
    console.log("Trying to share")
      Share.share({
        url: this.props.article.link
      },
      )
      .catch((error) => console.log(error));
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
    <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
  <TouchableOpacity onPress={() => this.shareArticle()} style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={Images.shareicon} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
</View>
)}
else{
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
      <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={Images.blackhearticon} style={{ height: 40, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
      <Image source={Images.shareicon} style={{ height: 40, width: 40}} />
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
