import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LinkingIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import PictureDescriptionArticle from './PictureDescriptionArticle';
import HeadlineArticle from './HeadlineArticle';
import FirstArticleCard from './FirstArticleCard';
import HalfPictureHeadlineArticle from './HalfPictureHeadlineArticle';

class NewsList extends Component {
  constructor() {
    super();
    this.state = { articles: [], isLoading: true, images:[] };
}

componentWillMount() {
  this.fetchNews();
}

  fetchNews() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?categories=36&filter[posts_per_page]=5")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ articles: responseData, isLoading: false});
      })
    /*  .then (() => {
        for (var i = 0; i < this.state.articles.length; i++) {
          if (this.state.articles[i].featured_media == 0) {
            this.setState({ images: this.state.images.concat('')})
          }
          else {
            fetch("https://tuftsdaily.com/wp-json/wp/v2/media/"+this.state.articles[i].featured_media)
              .then((response) => response.json())
              .then((responseData) => {
                this.setState({ images: this.state.images.concat(responseData.media_details.sizes.medium.source_url)})
                console.log(responseData)
              })
              .catch((error) => {
                console.log(error);
              })
              .done();
          }
        }
      })
      .then(() => {
        this.setState({ isLoading: false })
      })*/
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  fetchImages() {
  //  console.log("Here")
    //console.log(this.state)
    for (var i = 0; i < this.state.articles.length; i++) {
      if (this.state.articles[i].featured_media == 0) {
        console.log('It be zero')
        return;
      }
      else {
        fetch("https://tuftsdaily.com/wp-json/wp/v2/media/"+this.state.articles[i].featured_media)
          .then((resonse) => response.json())
          .then((responseData) => {
            console.log(responseData)
          })
          .catch((error) => {
            console.log(error);
          })
          .done();
      }
    }
  }


  render() {
    //console.log("HERE")
    const goToNews = () => Actions.newsSection();
    if (this.state.isLoading) {
      return (
      <Text></Text>
    );
    }
    else {
    //  console.log("HERE")
      return (
        <View>
            <FirstArticleCard article={this.state.articles[0]} image={this.state.images[4]} />
            <ArticleCard>
              <PictureDescriptionArticle article={this.state.articles[1]} image={this.state.images[2]} />
              <HeadlineArticle article={this.state.articles[2]} image={this.state.images[1]} />
              <HeadlineArticle article={this.state.articles[3]} image={this.state.images[3]} />
              <TouchableOpacity onPress={goToNews}>
                <View style={{ padding: 5, justifyContent: 'space-between', flexDirection: 'row',alignItems:'center', backgroundColor: '#fff', }}>
                  <Text style={{ color: '#a8a8a8', fontSize: 10, paddingLeft: 3 }}>More News</Text>
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

  }
};

export default NewsList;
