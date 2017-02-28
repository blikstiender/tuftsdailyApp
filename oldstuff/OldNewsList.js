import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NewsCard from './NewsCard';
import ArticleCard from './ArticleCard';

class NewsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  console.log('NEEEEEEWSSSS')
  this.fetchNews();
}

  fetchNews() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=36&filter[posts_per_page]=5")
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
        this.setState({ articles: responseData, isLoading: false });
        console.log('eyoooo');
        console.log(this.state);
        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  renderNews() {
    return this.state.articles.map(article =>
      <NewsCard key={article.id} article={article} />
    );
  }

  render() {
    if (this.isLoading) {
      return (
      <Text>LOADING</Text>
    );
    }
    else {
    return (
      <View>
        <Text style={styles.sectionHeaderStyle}>News</Text>
        <ArticleCard>
          {this.renderNews()}
          <Text style={{marginTop: 10, marginBottom: 10, marginLeft: 5,}}>See more news</Text>
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

  }
};

export default NewsList;
