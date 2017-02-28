import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import PictureHeadlineArticle from './PictureHeadlineArticle';
import HeadlineArticle from './HeadlineArticle';
import FirstArticleCard from './FirstArticleCard';

class SportsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  this.fetchOpinions();
}

  fetchOpinions() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=27&filter[posts_per_page]=17")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ articles: responseData, isLoading: false });
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Text></Text>
      );
    }
    else {
      return (
        <ScrollView style={{ marginTop: 70}}>
          <FirstArticleCard article= {this.state.articles[0]} />
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[1]} />
            <HeadlineArticle article={this.state.articles[2]} />
            <HeadlineArticle article={this.state.articles[3]} />
            <PictureHeadlineArticle article={this.state.articles[4]} />
          </ArticleCard>
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[5]} />
            <HeadlineArticle article={this.state.articles[6]} />
            <HeadlineArticle article={this.state.articles[7]} />
            <PictureHeadlineArticle article={this.state.articles[8]} />
          </ArticleCard>
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[9]} />
            <HeadlineArticle article={this.state.articles[10]} />
            <HeadlineArticle article={this.state.articles[11]} />
            <PictureHeadlineArticle article={this.state.articles[12]} />
          </ArticleCard>
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[13]} />
            <HeadlineArticle article={this.state.articles[14]} />
              <HeadlineArticle article={this.state.articles[15]} />
            <PictureHeadlineArticle article={this.state.articles[16]} />
          </ArticleCard>
        </ScrollView>
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

export default SportsList;
