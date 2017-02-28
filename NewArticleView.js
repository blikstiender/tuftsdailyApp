import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import { Actions } from 'react-native-router-flux';

class NewArticleView extends Component {
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
        this.setState({ imageID: responseData.media_details.sizes.medium.source_url, isLoading: false });
      })
      .catch((error) => {
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
        this.setState({ authorID: responseData.name, isLoading: false });
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }

render() {
  const goBack = () => Actions.pop();
  if (this.props.isLoading) {
    return (
      <Text></Text>
    )
  }
else {
return (
  <View>
  <ScrollView style={{ marginTop: 20 }}>
    <ArticleCard>
      <View style={{ marginBottom: 10, }}>
        <Image
          style={styles.imageStyle}
          source={{uri: this.state.imageID }}
        />
      </View>
      <View style={{ marginLeft: 8, marginRight: 8 }}>
        <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>
        <Text style={styles.descriptionTextStyle}>{ this.props.article.content.rendered }</Text>
      </View>
    </ArticleCard>
  </ScrollView>
  <TouchableOpacity onPress={goBack} style={{position: 'absolute', left: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./backarrow.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
  <TouchableOpacity style={{position: 'absolute', right: 30, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./blackhearticon.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
  <TouchableOpacity onPress={goBack} style={{position: 'absolute', right: 100, bottom: 10, justifyContent: 'center'}}>
    <Image source={require('./shareicon.png')} style={{ height: 40, width: 40}} />
  </TouchableOpacity>
</View>
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
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center',
    paddingBottom: 5,

  },

  descriptionTextStyle: {
    fontSize: 12,
    color: '#696969',
    fontFamily: 'Avenir'
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

export default NewArticleView;
