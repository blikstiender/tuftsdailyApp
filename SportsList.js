import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureHeadlineArticle from './PictureHeadlineArticle';
import HeadlineArticle from './HeadlineArticle';
import FirstArticleCard from './FirstArticleCard';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';

class SportsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true };
}

componentWillMount() {
  this.Mounted = true;
  this.fetchSports();
}

componentWillUnmount() {
  this.Mounted = false;
}

async fetchSports() {
    try {
      let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=27&per_page=5');
      let responseJson = await response.json();
      if (this.Mounted) {
        this.setState({ articles: responseJson, isLoading: false });
      }
    } catch(error) {
      console.error(error);
    }
  }

  render() {
    const goToSports = () => Actions.sportsSection();
    if (this.state.isLoading) {
      return (
        <Text></Text>
      );
    }
    else {
      return (
        <View>
          <View style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.sectionHeaderStyle}>Sports</Text>
          </View>
          <ArticleCard>
            <PictureHeadlineArticle article={this.state.articles[0]} />
            <View style={{ height: 10, backgroundColor: '#fff'}}></View>
            <PictureHeadlineArticle article={this.state.articles[1]} />
            <TouchableOpacity onPress={goToSports}>
              <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More Sports</Text>
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

  }
};

export default SportsList;
