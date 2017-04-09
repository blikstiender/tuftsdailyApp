import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LinkingIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import FirstArticleCard from './FirstArticleCard';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';

class NewsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true, images:[] };
}

componentWillMount() {
  this.Mounted = true;
  this.fetchNews();
}

componentWillUnmount() {
  this.Mounted = false;
}

async fetchNews() {
    try {
      let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=36&per_page=5');
      let responseJson = await response.json();
      if (this.Mounted) {
        this.setState({ articles: responseJson, isLoading: false });
      }
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const goToNews = () => Actions.newsSection();
    if (this.state.isLoading) {
      return (
      <Text></Text>
    );
    }
    else {
      return (
        <View>
            <FirstArticleCard article={this.state.articles[0]}/>
            <ArticleCard>
              <PictureDescriptionArticle article={this.state.articles[1]}/>
              <HeadlineArticle article={this.state.articles[2]}/>
              <HeadlineArticle article={this.state.articles[3]}/>
              <TouchableOpacity onPress={goToNews}>
                <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                  <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More News</Text>
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

  }
};

export default NewsList;
