import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import ArticleCardSection from './ArticleCardSection';
import ArticleCard from './ArticleCard';

class OtherFirstArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', authorID: props.article.author, isLoading: true};
  }

  componentWillMount() {
    this.fetchAuthor();

  }

  setAuthorURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/users/' + this.props.article.author)
  }

  fetchAuthor() {
    fetch(this.setAuthorURL())
      .then((response) => response.json())
      .then((responseData) => {
        // this.setState() will cause the new data to be applied to the UI that is created by the `render` function below
      //  console.log('Fetching author')
        this.setState({ authorID: responseData.name, isLoading: false });
      //  console.log(responseData)

        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log('Error fetching');
      })
      .done();
  }


render() {
  const goToArticle = () => Actions.pageThree({ article: this.props.article });
  /*if (this.state.isLoading) {
    this.fetchImage();
  }*/
return (
  <TouchableOpacity onPress={goToArticle}>
    <ArticleCard>
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{  alignItems: 'center', paddingTop: 10, }}>
        <Text style={styles.headerTextStyle}><HTMLView value={ this.state.title } /></Text>
        <Text style={{ color: '#778899', fontSize: 10, fontWeight: '500', paddingTop: 8, paddingBottom: 8 }}>{this.state.authorID}</Text>
      </View>
      <View style={{ marginLeft: 10, marginRight: 10, paddingBottom: 12 }}>
        <Text numberOfLines={6} style={styles.descriptionTextStyle}> <HTMLView
            value={this.props.article.excerpt.rendered}
          />
        </Text>
      </View>
    {/*  <View style={styles.borderStyle}>
    </View>*/}
    </ArticleCardSection>
  </ArticleCard>
  </TouchableOpacity>
)

}
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,


  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center'

  },
  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
    fontFamily: 'Avenir',
    textAlign: 'center',
    marginBottom: 10
  },
  thumbnailStyle: {
    height: 150,
    width: 150
  },
  circularImageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 15

  }
};

export default OtherFirstArticleCard;
