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
    this.state = { articles: [], isLoading: true, animating: true, unmounted: false, isMounted: false };
}

async componentWillMount() {
  this.Mounted = true;
}

closeActivityIndicator() {
      setTimeout(() => {
        if (this.Mounted) {
         this.setState({animating: false});
       }
      }, 2000);
   }
   async componentDidMount() {
     this.fetchFeatures();
      this.closeActivityIndicator();
   }

   componentWillUnmount() {
     this.Mounted = false;
   }

   async fetchFeatures() {
       try {
         let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=38&per_page=5');
         let responseJson = await response.json();
         if (this.Mounted) {
           this.setState({ articles: responseJson, isLoading: false });
         }
       } catch(error) {
         console.error(error);
       }
     }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Jumbo is getting your news</Text>
          <ActivityIndicator
            style={{ paddingTop: 15 }}
            size="large"
        />
        </View>
    );
    }
    else {
    console.log('rendering')
    return (
      <View>
      <NewsList featureArticle={this.state.articles[0]}/>
      <OpinionsList featureArticle={this.state.articles[1]}/>
      <ArtsList featureArticle={this.state.articles[2]}/>
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
