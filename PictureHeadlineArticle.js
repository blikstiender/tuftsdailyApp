import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';

import Images from 'assets';

class PictureHeadlineArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: props.article.author, isLoading: true};
  }

  componentWillMount() {
    this.fetchAuthor();
    if (this.props.article.featured_media == 0) {
      this.setState({ isLoading: false })
    }
    else {
      this.fetchImage();
    }
  }

  setURL() {

    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + (this.props.article.featured_media).toString());
  }

  fetchImage() {
    fetch(this.setURL())
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
      //  console.log('Fetching image')
        this.setState({ imageID: responseData.media_details.sizes.medium.source_url, isLoading: false });


        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  setAuthorURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/users/' + this.props.article.author)
  }

  fetchAuthor() {
    fetch(this.setAuthorURL())
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
      //  console.log('Fetching author')
        this.setState({ authorID: responseData.name});
      //  console.log(responseData)

        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
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
        <View style={{ flexDirection: 'row' }}>
          <Image source={Images.hearticon} style={styles.iconStyle}/>
        <Text style={{ color: '#778899', fontSize: 10 }}>21</Text>
        </View>
      </View>
      <View style={styles.borderStyle}>
      </View>
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
        <View style={{ flexDirection: 'row' }}>
          <Image source={Images.hearticon} style={styles.iconStyle}/>
        <Text style={{ color: '#778899', fontSize: 10 }}>21</Text>
        </View>
      </View>
      <View style={styles.borderStyle}>
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
