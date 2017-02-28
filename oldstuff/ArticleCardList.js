import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import BigPictureDescriptionArticle from './BigPictureDescriptionArticle';
import BigPictureNoDescriptionArticle from './BigPictureNoDescriptionArticle';
import ArticleCardDetail2 from './ArticleCardDetail2';
import CircularPictureArticle from './CircularPictureArticle';
import HeadlineOnlyArticle from './HeadlineOnlyArticle';
import HalfPictureArticle from './HalfPictureArticle';
import HeadlineDescriptionArticle from './HeadlineDescriptionArticle';
import ArticleCard from './ArticleCard';
import Header from './Header';

class ArticleCardList extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [
      { title: '', excerpt:'', imageID: '' },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  },
      { title: '', excerpt:'', imageID: ''  }
    ] };
    this.fetchData();
  }
// Automatically called by react when this component has finished mounting.
componentDidMount () {
  this.fetchData();
}
// This is where the magic happens! Fetches the data from our API and updates the application state.
fetchData() {
  fetch('https://tuftsdaily.com/wp-json/wp/v2/posts/')
    .then((response) => response.json())
    .then((responseData) => {
      // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
      this.setState({ articles: responseData });
      //console.log(this.state.articles);
      //console.log(this.state.articles[0].title.rendered)
    })
    .catch((error) => {
      console.log('Error fetching');
    })
    .done();
}
renderNews() {
//  console.log(this.state.articles[0])
  return (
    <ScrollView>
      <Header />
      <ArticleCard>
        <BigPictureDescriptionArticle
          title={this.state.articles[0].title.rendered}
          description={this.state.articles[0].excerpt.rendered}
          imageID = {this.state.articles[0].featured_media}
        ></BigPictureDescriptionArticle>
        <HeadlineOnlyArticle
          title={this.state.articles[1].title.rendered}
        ></HeadlineOnlyArticle>
        <HeadlineOnlyArticle
          title={this.state.articles[2].title.rendered}
        ></HeadlineOnlyArticle>
      </ArticleCard>
      <ArticleCard>
        <HalfPictureArticle
          title={this.state.articles[3].title.rendered}
          imageID = {this.state.articles[3].featured_media}
        ></HalfPictureArticle>
      </ArticleCard>
      <Text style={{ marginTop: 20, marginLeft: 5 }}>Section name</Text>
      <ArticleCard>
        <HeadlineDescriptionArticle
          title={this.state.articles[4].title.rendered}
          description={this.state.articles[5].excerpt.rendered}
        ></HeadlineDescriptionArticle>
        <HeadlineOnlyArticle
          title={this.state.articles[5].title.rendered}
        ></HeadlineOnlyArticle>
        <CircularPictureArticle
          title={this.state.articles[6].title.rendered}
          imageID = {this.state.articles[6].featured_media}
        ></CircularPictureArticle>
        <HeadlineOnlyArticle
          title={this.state.articles[7].title.rendered}
        ></HeadlineOnlyArticle>
      </ArticleCard>
      <ArticleCard>
        <HalfPictureArticle
          title={this.state.articles[8].title.rendered}
          imageID = {this.state.articles[8].featured_media}
        ></HalfPictureArticle>
      </ArticleCard>
      <Text style={{ marginTop: 20, marginLeft: 5 }}>Section name</Text>
      <ArticleCard>
        <BigPictureNoDescriptionArticle
          title={this.state.articles[9].title.rendered}
          imageID = {this.state.articles[9].featured_media}
        ></BigPictureNoDescriptionArticle>
      </ArticleCard>

    </ScrollView>

  )
}

  render () {
  return (
    this.renderNews()
  )
}
}

export default ArticleCardList;
