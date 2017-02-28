import React, { Component } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';

class OpinionSection extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  this.fetchOpinions();
}

  fetchOpinions() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=24&filter[posts_per_page]=20")
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
        <ScrollView style={{ marginTop: 70 }}>
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
          <OtherFirstArticleCard article={this.state.articles[8]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[9]}/>
            <HeadlineArticle article={this.state.articles[10]} />
            <HeadlineArticle article={this.state.articles[11]} />
            <OtherFirstArticleCard article={this.state.articles[12]} />
          </ArticleCard>
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[13]}/>
              <HeadlineArticle article={this.state.articles[14]} />
              <HeadlineArticle article={this.state.articles[15]} />
          </ArticleCard>
          <OtherFirstArticleCard article={this.state.articles[16]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[17]}/>
            <HeadlineArticle article={this.state.articles[18]} />
            <HeadlineArticle article={this.state.articles[19]} />
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
    alignItems: 'center',

  }
};

export default OpinionSection;
