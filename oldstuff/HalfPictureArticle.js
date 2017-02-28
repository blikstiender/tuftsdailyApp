import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleCardSection2 from './ArticleCardSection2';
import ShareButton from './ShareButton';

class HalfPictureArticle extends Component {
  constructor(props) {
    super(props);
  //  console.log(props)
    this.state = {title: props.title, imageID: props.imageID, isLoading: true};
  }

  setURL() {

    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + this.props.imageID);
  }

  fetchImage() {
    fetch(this.setURL())
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        this.setState({ imageID: responseData.media_details.sizes.medium.source_url, isLoading: false });
        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }

render() {
  if (this.state.isLoading) {
    this.fetchImage()
  }
return (
  <TouchableOpacity>
    <ArticleCardSection2>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{ this.props.title }</Text>
        <Text style={{ color: '#778899', fontSize: 10 }}>Yotam Bentov</Text>
        <ShareButton></ShareButton>
      </View>
      <View>
        <Image
          style={styles.halfImageStyle}
          source={{ uri: this.state.imageID }}
        />
      </View>

    </ArticleCardSection2>
  </TouchableOpacity>
)
}
}

const styles = {
  headerContentStyle: {
    marginLeft: 10,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',

  },
  halfImageStyle: {
    width: 200,
    height: 200
  },
  shareButton: {

  }
};

export default HalfPictureArticle;
