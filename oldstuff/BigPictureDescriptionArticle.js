import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import ArticleCardSection from './ArticleCardSection';

class BigPictureDescriptionArticle extends Component {
  constructor(props) {
    super(props);
  //  console.log(props)
    this.state = {title: props.title, description: props.description, imageID: props.imageID, isLoading: false};
  }

  setURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + this.props.imageID);
  }

  fetchImage() {
    //console.log(this)
    fetch(this.setURL())
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ imageID: responseData.media_details.sizes.medium.source_url, isLoading: true });
      //  console.log(this.state.imageID)
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }

render() {
  if (!this.state.isLoading) {
    this.fetchImage();
  }
return (
  <TouchableOpacity>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Image
          style={styles.imageStyle}
          source={{ uri: this.state.imageID }}
        />
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.headerTextStyle}>{ this.props.title }</Text>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Text style={styles.descriptionTextStyle}>{ this.props.description }</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>Yotam Bentov</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
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
    justifyContent: 'center'

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
  }
};

export default BigPictureDescriptionArticle;
