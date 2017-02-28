import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleCardSection2 from './ArticleCardSection';

class NewsCard extends Component {
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
  //console.log(this)
if (this.props.article.featured_media != 0 & && this.props.article.categories[0] == 36) {
return (
  <TouchableOpacity>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Image
          style={styles.imageStyle}
          source={{uri: this.state.imageID }}
        />
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
        <Text style={styles.descriptionTextStyle}>{ this.props.article.excerpt.rendered }</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>{this.state.authorID}</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
  </TouchableOpacity>
)
}
else if (this.props.article.categories[0] == 36){
  return (
    <TouchableOpacity>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
        <Text style={styles.descriptionTextStyle}>{ this.props.article.excerpt.rendered }</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>{this.state.authorID}</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
    </TouchableOpacity>
  )
}

else if (this.props.article.categories[0] == 24) {
  return (
    <TouchableOpacity>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>{this.state.authorID}</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
    </TouchableOpacity>
  )
}

else if (this.props.article.categories[0] == 27) {
  return (
    <TouchableOpacity>
      <ArticleCardSection style={styles.headerContentStyle}>
        <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
          <Image
            style={styles.imageStyle}
            source={{uri: this.state.imageID }}
          />
        </View>
        <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
          <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
        </View>
        <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#778899', fontSize: 12 }}>{this.state.authorID}</Text>
          <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
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

  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    justifyContent: 'center'

  },

  descriptionTextStyle: {
    fontSize: 16,
    color: '#696969',
  },

  imageStyle: {
    height: 200,
    width: null,
    flex: 1,

  }
};

export default NewsCard;
