import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection2 from './ArticleCardSection2';

class OpinionCard extends Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {title: props.article.title.rendered, imageID: props.article.featured_media, authorID: props.article.author, isLoading: true};
  }

  componentWillMount() {
    //console.log(this.props.article.featured_media)
    this.fetchAuthor();
    if (this.props.article.featured_media == 0) {
      this.setState({ title: this.props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', isLoading: false})
    }
    else {
      this.fetchImage();
    }
  }

  setURL() {

    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + this.props.article.featured_media);
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
        console.log('Error fetching');
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
    //    console.log('Fetching author')
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
if (this.state.isLoading) {
  return (
    <Text>Loading</Text>
  )
}
else {
return (
  <TouchableOpacity>
    <ArticleCardSection2>
      <View>
        <Image
          style={styles.circularImageStyle}
          source={{ uri: this.state.imageID }}
        />
      </View>
      <View style={{ justifyContent: 'center', marginLeft: 10, flex: 1, flexWrap: 'wrap' }}>
        <Text style={styles.headerTextStyle}>{ this.state.title}</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>{this.state.authorID}</Text>
      </View>
    </ArticleCardSection2>
    </TouchableOpacity>
)
}
}
}

const styles = {

  headerTextStyle: {
    fontSize: 20,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circularImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40
  },

};

export default OpinionCard;
