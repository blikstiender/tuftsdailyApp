import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import OtherFirstArticleCard from './OtherFirstArticleCard';
import FirstArticleCard from './FirstArticleCard';
import MainHeader from './MainHeader';
import Images from './assets';

class OpinionSection extends Component {
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
        //this.isCartoon();
      }
    } catch(error) {
      console.error(error);
    }
  }


/*Function that goes through opinions array, check if is a cartoon, and if so sets imageID to cartoon link*/
isCartoon() {
  for(i = 0; i < this.state.articles.length; i++) {
    var codeLine = this.state.articles[i].title.rendered

  var firstWord = codeLine.substr(0, codeLine.indexOf(" "));
  if (firstWord == 'Cartoon:') {
    var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    //console.log(this.state.articles[i].content.rendered)
    console.log(this.state.articles[i].content.rendered.match(expression)[1]);

  }

  }
}

  render() {
    const goBack = () => Actions.pop();
    if (this.state.isLoading) {
      return (
        <Text></Text>
      );
    }
    else {
      return (
        <View>
          <MainHeader page = 'opinion' />
          <ScrollView>
          <FirstArticleCard article={this.state.articles[0]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[1]}/>
            <HeadlineArticle article={this.state.articles[2]} />
            <HeadlineArticle article={this.state.articles[3]} isLast={true}/>
          </ArticleCard>
          <FirstArticleCard article={this.state.articles[4]} />
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[5]}/>
              <HeadlineArticle article={this.state.articles[6]} />
              <HeadlineArticle article={this.state.articles[7]} isLast={true}/>
          </ArticleCard>
          <FirstArticleCard article={this.state.articles[8]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[9]}/>
            <HeadlineArticle article={this.state.articles[10]} />
            <HeadlineArticle article={this.state.articles[11]} isLast={true}/>
          </ArticleCard>
          <FirstArticleCard article={this.state.articles[12]} />
            <ArticleCard>
              <HeadlineArticle article={this.state.articles[13]}/>
              <HeadlineArticle article={this.state.articles[14]} />
              <HeadlineArticle article={this.state.articles[15]} isLast={true}/>
          </ArticleCard>
          <FirstArticleCard article={this.state.articles[16]} />
          <ArticleCard>
            <HeadlineArticle article={this.state.articles[17]}/>
            <HeadlineArticle article={this.state.articles[18]} />
            <HeadlineArticle article={this.state.articles[19]} isLast={true}/>
          </ArticleCard>
        </ScrollView>
        <TouchableOpacity onPress={goBack} /*onPress={goToSectionList}*/ style={{position: 'absolute', left: 15, bottom: 20, justifyContent: 'center'}}>
          <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
        </TouchableOpacity>
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

export default OpinionSection;
