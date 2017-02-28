import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ArticleCard from './ArticleCard';
import OpinionCard from './OpinionCard';

class EverythingList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  console.log('Will mount')
  this.fetchOpinions();
}

  fetchEverything() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts")
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

  renderEverything() {
    return this.state.articles.map(article =>
      <EverythingCard key={article.id} article={article} />
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
        <ArticleCard>
          {this.renderEverything()}
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

export default EverythingList;
