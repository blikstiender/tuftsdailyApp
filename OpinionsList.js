import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';

class OpinionsList extends Component {
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
    const goToOpinions = () => Actions.opinionSection();
    if (this.state.isLoading) {
      return (
        <Text></Text>
      );
    }
    else {
      return (
        <View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.sectionHeaderStyle}>Opinion</Text>
          </View>
          <OtherFirstArticleCard article={this.state.articles[0]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[3]}/>
            <HeadlineArticle article={this.state.articles[4]} />
            <HeadlineArticle article={this.state.articles[7]} />
            <TouchableOpacity onPress={goToOpinions}>
              <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More Opinion</Text>
                <Text style={{ color: '#67A1D1', fontSize: 20, fontWeight: '500', paddingRight: 3 }}>></Text>
              </View>
            </TouchableOpacity>
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

export default OpinionsList;
