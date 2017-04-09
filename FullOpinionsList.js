import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';

class FullOpinionsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  this.Mounted = true;
  this.fetchOpinions();
}

componentWillUnmount() {
  this.Mounted = false;
}

async fetchOpinions() {
    try {
      let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=24&per_page=20');
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
          <OtherFirstArticleCard article={this.state.articles[0]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[1]}/>
            <HeadlineArticle article={this.state.articles[2]} />
            <HeadlineArticle article={this.state.articles[3]} isLast={true}/>
            <OtherFirstArticleCard article={this.state.articles[4]} />
          </ArticleCard>
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[5]}/>
              <HeadlineArticle article={this.state.articles[6]} />
              <HeadlineArticle article={this.state.articles[7]} isLast={true}/>
          </ArticleCard>
          <OtherFirstArticleCard article={this.state.articles[8]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[9]}/>
            <HeadlineArticle article={this.state.articles[10]} />
            <HeadlineArticle article={this.state.articles[11]} isLast={true}/>
            <OtherFirstArticleCard article={this.state.articles[12]} />
          </ArticleCard>
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[13]}/>
              <HeadlineArticle article={this.state.articles[14]} />
              <HeadlineArticle article={this.state.articles[15]} isLast={true}/>
          </ArticleCard>
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

export default FullOpinionsList;
