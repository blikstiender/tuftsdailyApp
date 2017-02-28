import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import OpinionsList from './OpinionsList';
import SportsList from './SportsList';
import NewsList from './NewsList';
import ArtsList from './ArtsList';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';
import HalfDescriptionArticle from './HalfDescriptionArticle';

class ArticlesList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true, animating: true };
}

componentWillMount() {
//  console.log('Will mount')
  this.fetchFeatures();
}

closeActivityIndicator() {
      setTimeout(() => {
         this.setState({animating: false});
      }, 2000);
   }
   componentDidMount() {
      this.closeActivityIndicator();
   }

  fetchFeatures() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=38&filter[posts_per_page]=7")
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Eyyyyyo');
        console.log(responseData);
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        this.setState({ articles: responseData, isLoading: false });
        console.log('Yoooooo')
        console.log(this.state)
        //console.log('eyoooo');
      //  console.log(this.state);
        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }
  render() {
    if (this.state.isLoading || this.state.animating) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Jumbo is getting your news</Text>
          <ActivityIndicator
            animating={this.state.animating}
            style={{ paddingTop: 15 }}
            size="large"
        />
        </View>
    );
    }
    else {
    return (
      <View>
      <NewsList />
      <HalfPictureHeadlineArticle article={this.state.articles[0]} />
      <OpinionsList />
      <HalfDescriptionArticle article={this.state.articles[1]} />
      <ArtsList />
      <HalfPictureHeadlineArticle article={this.state.articles[6]} />
      <SportsList />
    </View>
    );
  };
}
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: require('Dimensions').get('window').height * 0.75,
  }
}

export default ArticlesList;
