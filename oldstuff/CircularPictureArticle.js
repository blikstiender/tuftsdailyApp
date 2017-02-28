import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleCardSection2 from './ArticleCardSection2';

class CircularPictureArticle extends Component {
  constructor(props) {
    super(props);
  //  console.log(props)
    this.state = {title: props.title, imageID: props.imageID, isLoading: false};
  }

  /*componentWillMount() {
    this.fetchImage();
  }*/

  setURL() {

    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + this.props.imageID);
  }

  fetchImage() {
    fetch(this.setURL())
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below

        this.setState({ imageID: responseData.media_details.sizes.medium.source_url, isLoading: true });

        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }

render() {
  if (!this.state.isLoading) {
    this.fetchImage()
  }
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
        <Text style={styles.headerTextStyle}>{ this.props.title}</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>By Yotam Bentov</Text>
      </View>
    </ArticleCardSection2>
    </TouchableOpacity>
)
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
    justifyContent: 'center',
    alignItems: 'center'

  },
  descriptionTextStyle: {
    fontSize: 16,
    color: '#696969',
  },
  thumbnailStyle: {
    height: 150,
    width: 150
  },
  circularImageStyle: {
    height: 80,
    width: 80,
    borderRadius: 40
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
  }
};

export default CircularPictureArticle;
