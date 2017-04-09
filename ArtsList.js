import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import PictureHeadlineArticle from './PictureHeadlineArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';

class ArtsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  this.Mounted = true;
  this.fetchArts();
}

componentWillUnmount() {
  this.Mounted = false;
}

async fetchArts() {
    try {
      let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=2&per_page=5');
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
        <Text></Text>
      );
    }
    else {
      return (
        <View>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.sectionHeaderStyle}>Arts</Text>
        </View>
          <OtherFirstArticleCard article={this.state.articles[0]} />
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[1]} />
            <HeadlineArticle article={this.state.articles[2]} />
            <TouchableOpacity>
              <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More Arts</Text>
                <Text style={{ color: '#67A1D1', fontSize: 20, fontWeight: '500', paddingRight: 3 }}>></Text>
              </View>
            </TouchableOpacity>
          </ArticleCard>
          <HalfPictureHeadlineArticle article={this.props.featureArticle} />
        </View>
      );
    }
  }
};

const styles = {
  sectionHeaderStyle: {
    marginTop: 20,
    marginLeft: 5,
    alignItems: 'center',

  }
};

export default ArtsList;
