import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ShareButton from './ShareButton';
import ArticleListStyle from './styles';
var moment = require('moment');


class SearchResultArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: props.article.author, isLoading: true, date: props.article.date};
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
    this.parseDate();
    if (this.props.article.featured_media == 0) {
      console.log('Eyyyyo')
      this.setState({ isLoading: false })
    }
    else {
      this.fetchImage();
    }
  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  setURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + (this.props.article.featured_media).toString());
  }

  async fetchImage() {
      try {
        let response = await fetch(this.setURL());
        let responseJson = await response.json();
        if (this.Mounted) {
          this.setState({ imageID: responseJson.media_details.sizes.medium.source_url, isLoading: false });
        }
      } catch(error) {
        console.error(error);
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
        this.setState({ authorID: responseJson.name });
      }
      } catch(error) {
        console.error(error);
      }
    }

  parseDate(){
    var fdate = moment(this.state.date, "YYYY-MM-DD").format("MMM D YYYY");
    this.setState({date: fdate})

  }

  render() {
    const goToArticle = () => Actions.pageThree({ article: this.props.article });
    if (this.props.isLoading) {
      return (
        <Text></Text>
      )
    }
    else if (this.props.article.featured_media == 0 || this.state.imageID == '') {
      return (
        <TouchableOpacity style={{ paddingTop: 10}} onPress={goToArticle}>
            <ArticleCardSection>
              <View style={styles.headerContentStyle}>
                <Text numberOfLines={4} style={styles.headerTextStyle}><HTMLView
                  value={'<p>' + this.state.title + '</p>'}
                /></Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, /*paddingLeft: 5,*/ paddingBottom: 10 }}>
                  <Text style={{ color: '#8e8e8e', fontSize: 12, fontFamily: 'Avenir', fontWeight: '300' }}>{this.state.date}</Text>
                  <Text style={{ color: '#778899', fontSize: 12, fontFamily: 'Avenir',  }}>  {this.state.authorID}</Text>
                </View>
              </View>
            <View style={ArticleListStyle.borderStyle}>
            </View>
            </ArticleCardSection>

        </TouchableOpacity>
      )

    }
    else {
      return (
        <TouchableOpacity style={{  paddingTop: 10 }} onPress={goToArticle}>
            <ArticleCardSection style={{ justifyContent: 'center' }}>
              <View style={{ flex: 0, flexDirection: 'row' }}>
              <View style={styles.headerContentStyle}>
                <Text numberOfLines={4} style={styles.headerTextStyle}><HTMLView
                  value={'<p>' + this.state.title + '</p>'}
                /></Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, /*paddingLeft: 5,*/ paddingBottom: 10 }}>
                <Text style={{ color: '#8e8e8e', fontSize: 12, fontFamily: 'Avenir', fontWeight: '300' }}>{this.state.date}</Text>
                <Text style={{ color: '#778899', fontSize: 12, fontFamily: 'Avenir',  }}>  {this.state.authorID}</Text>
              </View>
              </View>
              <View>
                <Image
                  style={styles.halfImageStyle}
                  source={{ uri: this.state.imageID }}
                />
              </View>
            </View>
              <View style={ArticleListStyle.borderStyle}>
              </View>
            </ArticleCardSection>

        </TouchableOpacity>
      )
    }
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
  //  justifyContent: 'center',
    flex: 1,
  //  alignItems: 'center',
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,

  },
  headerTextStyle: {
    fontSize: 14,
    fontWeight: '500',
  //  justifyContent: 'center',
    paddingTop: 10,
//    marginLeft: 5,
//    marginRight: 5
  },

  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
    width: 150,
    lineHeight: 22

  },

  halfImageStyle: {
    width: 80,
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    borderRadius: 5
  },

  searchBorderStyle: {
    borderBottomWidth: 3,
    borderColor: '#545454',
    height: 3,
    width: 140,
    marginLeft: 10
  }
};

export default SearchResultArticle;
