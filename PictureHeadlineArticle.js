import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from './costum_modules/react-native-htmlview';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import Images from 'assets';

class PictureHeadlineArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: props.article.author, isLoading: true, isLast: props.isLast };
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
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

render() {
  const goToArticle = () => Actions.pageThree({ article: this.props.article });
if (this.props.isLoading) {
  return (
    <Text></Text>
  )
}
else if (this.props.article.featured_media == 0 || this.state.imageID == ''){
return (
  <TouchableOpacity onPress={goToArticle}>
    <ArticleCardSection>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, paddingTop: 15 }}>
        <Text style={styles.headerTextStyle}>
        <HTMLView
          value={'<p>' + this.state.title + '</p>'}
        />
        </Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>

      </View>
      <View style={ this.state.isLast ? { paddingBottom: 8 } : styles.borderStyle } />
    </ArticleCardSection>
  </TouchableOpacity>
)
}

else {
return (
  <TouchableOpacity onPress={goToArticle}>
    <ArticleCardSection>
      <View style={{ marginBottom: 10 }}>
        <Image
          style={styles.imageStyle}
          source={{uri: this.state.imageID }}
        />
      </View>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8 }}>
        <Text style={styles.headerTextStyle}>
        <HTMLView
          value={'<p>' + this.state.title + '</p>'}
        />
        </Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>

      </View>
      <View style={ this.state.isLast ? { paddingBottom: 8 } : styles.borderStyle }/>
    </ArticleCardSection>
  </TouchableOpacity>
)
}

}
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    marginTop: 5,

  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center'

  },

  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
    lineHeight: 22
  },

  imageStyle: {
    height: 200,
    width: null,
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

export default PictureHeadlineArticle;
