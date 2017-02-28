import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCardSection from './ArticleCardSection';
import ArticleCard from './ArticleCard';

class FirstArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', authorID: props.article.author, isLoading: true};
  }

  componentWillMount() {
    this.fetchAuthor();
    if (this.props.article.featured_media == 0) {
      this.setState({ title: this.props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', isLoading: false})
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
        this.setState({ authorID: responseData.name, isLoading: false });
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
  <TouchableOpacity onPress={goToArticle}>
    <ArticleCard>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 10,  }}>
        <Image
          style={styles.imageStyle}
          source={{ uri: this.state.imageID }}
        />
      </View>
      <View style={{  alignItems: 'center' }}>
        <Text style={styles.headerTextStyle}>{this.state.title}</Text>
        <Text style={{ color: '#778899', fontSize: 10, fontWeight: '500', padding: 5 }}>{this.state.authorID}</Text>
      </View>
      <View style={{ marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.descriptionTextStyle}>{this.props.article.excerpt.rendered}</Text>
      </View>
      <View style={styles.borderStyle}>
      </View>
    </ArticleCardSection>
  </ArticleCard>
  </TouchableOpacity>
)
};
}
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center'

  },
  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
    fontFamily: 'Avenir',
    textAlign: 'center',
  },
  thumbnailStyle: {
    height: 150,
    width: 150
  },
  circularImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 15

  }
};

export default FirstArticleCard;
