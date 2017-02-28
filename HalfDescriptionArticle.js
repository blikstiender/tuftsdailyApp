import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleCardSection2 from './ArticleCardSection2';
import ShareButton from './ShareButton';

class HalfDescriptionArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', authorID: props.article.author, isLoading: true};
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
      //  console.log('Error fetching');
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
        this.setState({ authorID: responseData.name,  });
      //  console.log(responseData)

        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log('Error fetching');
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
  else {
  return (
    <TouchableOpacity style={{ marginTop: 10}} onPress={goToArticle}>
      <ArticleCard>
      <ArticleCardSection2>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
          <Text style={{ color: '#778899', fontSize: 10, textAlign: 'right', paddingTop: 5, justifyContent: 'center' }}>{this.state.authorID}</Text>
          <View style={{ paddingTop: 20 }}>
          <ShareButton></ShareButton>
        </View>
        </View>
        <View style={{paddingTop: 15, marginRight: 20}}>
          <Text numberOfLines={6} style={styles.descriptionTextStyle}>{this.props.article.excerpt.rendered}</Text>
        </View>
      </ArticleCardSection2>
    </ArticleCard>
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
    alignItems: 'center',
    paddingTop: 10,

  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    paddingTop: 5,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'right',
    width: 150
  },

  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
    width: 150,
    lineHeight: 22

  },

  halfImageStyle: {
    width: 200,
    height: 200
  }
};

export default HalfDescriptionArticle;
