import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from './costum_modules/react-native-htmlview';
import ArticleCardSection from './ArticleCardSection';
import ArticleCard from './ArticleCard';

class OtherFirstArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: 'https://now.tufts.edu/sites/default/files/bodyimages/150429_jumbo_L_inside.jpg', authorID: props.article.author, isLoading: true};
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  setAuthorURL() {
    return ('https://tuftsdaily.com/wp-json/wp/v2/users/' + this.props.article.author)
  }

  async fetchAuthor() {
      try {
        let response = await fetch(this.setAuthorURL());
        let responseJson = await response.json();
        if (this.Mounted) {
        this.setState({ authorID: responseJson.name });
      }
      } catch(error) {
        console.error(error);
      }
    }

render() {
  const goToArticle = () => Actions.pageThree({ article: this.props.article });
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
    fontWeight: '300',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
    fontFamily: 'Superclarendon',

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
