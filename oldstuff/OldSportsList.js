import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SportsCard from './SportsCard';
import ArticleCard from './ArticleCard';

class SportsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  console.log('Will mount')
  this.fetchSports();
}

  fetchSports() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=27&filter[posts_per_page]=5")
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

  renderSports() {
    return this.state.articles.map(article =>
      <SportsCard key={article.id} article={article} />
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
        <Text style={styles.sectionHeaderStyle}>Sports</Text>
        <ArticleCard>
          {this.renderSports()}
          <Text style={{marginTop: 10, marginBottom: 10, marginLeft: 5,}}>See more sports</Text>
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

export default SportsList;
