import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';

class OpinionsList extends Component {
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
      let response = await fetch('https://tuftsdaily.com/wp-json/wp/v2/posts?categories=24&per_page=5');
      let responseJson = await response.json();
      if (this.Mounted) {
        this.setState({ articles: responseJson, isLoading: false });
      }
    } catch(error) {
      console.error(error);
    }
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
            <HeadlineArticle article={this.state.articles[1]}/>
            <HeadlineArticle article={this.state.articles[2]} />
            <HeadlineArticle article={this.state.articles[3]} />
            <TouchableOpacity onPress={goToOpinions}>
              <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More Opinion</Text>
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
    alignItems: 'center',

  }
};

export default OpinionsList;
