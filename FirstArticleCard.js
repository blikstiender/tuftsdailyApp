import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView, StyleSheet, Linking } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Actions } from 'react-native-router-flux';
import ArticleCardSection from './ArticleCardSection';
import ArticleCard from './ArticleCard';

class FirstArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, imageID: '', authorID: '', isLoading: true, };
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
    if (this.props.article.featured_media == 0) {
      this.setState({ title: this.props.article.title.rendered, imageID: '', isLoading: false})
    }
    else {
      this.fetchImage();
    }
    this.isCartoon();
  }

  componentWillUnmount() {
    this.Mounted = false;
  }

  setURL() {

    return ('https://tuftsdaily.com/wp-json/wp/v2/media/' + (this.props.article.featured_media).toString());
  }

  async fetchImage() {
      try {
        let response = await fetch(this.setURL());
        let responseJson = await response.json();
        if (this.Mounted) {
          this.setState({ imageID: responseJson.media_details.sizes.medium.source_url, isLoading: false });
        }
      } catch(error) {
        console.error(error);
      }
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

    isCartoon() {
      var codeLine = this.state.title
      var firstWord = codeLine.substr(0, codeLine.indexOf(" "));
      if (firstWord == 'Cartoon:') {
        var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
        var expression2 =/........(?:png|jpg)/g;
        //console.log(this.state.articles[i].content.rendered)
        var url = this.props.article.content.rendered.match(expression)[1];
        var width = this.props.article.content.rendered.match(expression2)[0].slice(0,3);
        var height = this.props.article.content.rendered.match(expression2)[0].slice(4,7);
        console.log(width);
        console.log(height);
        this.setState({cartoonURL: url, isCartoon: true, cartoonWidth: width, cartoonHeight: height });
      }
    }

render() {
  const goToArticle = () => Actions.pageThree({ article: this.props.article });
  if (this.state.isLoading) {
    return (
      <Text></Text>
    )
  }
  else if (this.state.isCartoon) {
    return (
      <TouchableOpacity onPress={goToArticle}>
        <ArticleCard>
      <ArticleCardSection style={styles.headerContentStyle}>
        <View style={{ marginBottom: 12, marginLeft: 8, marginRight: 8, marginTop: 15, alignItems: 'center' }}>
          <Image
            style={this.state.cartoonWidth ? {width: this.state.cartoonWidth/4, height: this.state.cartoonHeight/4, flex: 1} : styles.cartoonStyle}
            source={{uri: this.state.cartoonURL }}
          />
        </View>
        <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>
        </View>
      </ArticleCardSection>
    </ArticleCard>
      </TouchableOpacity>
    )
  }
  else if (this.props.article.featured_media == 0 ) {
    return (
      <TouchableOpacity onPress={goToArticle}>
        <ArticleCard>
        <ArticleCardSection style={styles.headerContentStyle}>
          <View style={{  alignItems: 'center', marginTop: 10 }}>
          <Text style={styles.headerTextStyle}>
          <HTMLView
            value={'<p>' + this.props.article.title.rendered + '</p>'}
          />
          </Text>
            <Text style={{ color: '#778899', fontSize: 10, fontWeight: '500', padding: 5 }}>{this.state.authorID}</Text>
          </View>
          <View style={{ marginLeft: 5, marginRight: 5, alignItems: 'center', paddingBottom: 12 }}>
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
  else {
  return (
    <TouchableOpacity onPress={goToArticle}>
      <ArticleCard>
      <ArticleCardSection style={styles.headerContentStyle}>
        <View style={{ marginBottom: 10,  }}>
          <Image
            style={styles.imageStyle}

            source={{ uri: this.state.imageID }}
          />
        </View>
        <View style={{  alignItems: 'center' }}>
        <Text style={styles.headerTextStyle}>
        <HTMLView
          value={'<p>' + this.props.article.title.rendered+ '</p>'}
        />
        </Text>
          <Text style={{ color: '#778899', fontSize: 10, fontWeight: '500', padding: 5 }}>{this.state.authorID}</Text>
        </View>
        <View style={{ marginLeft: 5, marginRight: 5, alignItems: 'center', paddingBottom: 12 }}>
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
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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

  descriptionCSS: {
    p: {
      textAlign: 'center',
      fontSize: 14,
      color: '#696969',

    }
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

  },
  cartoonStyle: {
    width: 150,
    height: 125,
    flex: 1
  }
};

const styles2 = StyleSheet.create({
  p: {
    textAlign: 'center',
    fontSize: 14,
    color: '#696969',
    margin: 0 // pink links
  },
})

export default FirstArticleCard;
