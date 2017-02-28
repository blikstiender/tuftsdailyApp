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
  this.fetchOpinions();
}

  fetchOpinions() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=24&filter[posts_per_page]=10")
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
        <View>
          <OtherFirstArticleCard article={this.state.articles[0]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[1]}/>
            <HeadlineArticle article={this.state.articles[2]} />
            <HeadlineArticle article={this.state.articles[3]} />
            <OtherFirstArticleCard article={this.state.articles[4]} />
          </ArticleCard>
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[5]}/>
              <HeadlineArticle article={this.state.articles[6]} />
              <HeadlineArticle article={this.state.articles[7]} />
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
