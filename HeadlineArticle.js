import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from './costum_modules/react-native-htmlview';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleListStyle from './styles';
import Images from 'assets';

class HeadlineArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, authorID: props.article.author, isLoading: true, isLast: props.isLast, cartoonWidth: 0, cartoonHeight: 0};
  }

  componentWillMount() {
    this.Mounted = true;
    this.fetchAuthor();
    this.isCartoon();
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
  if (this.props.isLoading) {
    return (
      <Text></Text>
    )
  }
  else if (this.state.isCartoon) {
    return (
      <TouchableOpacity onPress={goToArticle}>
      <ArticleCardSection style={ArticleListStyle.headerContentStyle}>
        <View style={{ marginBottom: 12, marginLeft: 8, marginRight: 8, marginTop: 15, alignItems: 'center' }}>
          <Image
            style={this.state.cartoonWidth ? {width: this.state.cartoonWidth/4, height: this.state.cartoonHeight/4, flex: 1} : styles.cartoonStyle}
            source={{uri: this.state.cartoonURL }}
          />
        </View>
        <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>
        </View>
        <View style={ this.state.isLast ? { paddingBottom: 8 } : ArticleListStyle.borderStyle }>
        </View>
      </ArticleCardSection>
      </TouchableOpacity>
    )
  }
  else {
  return (
    <TouchableOpacity onPress={goToArticle}>
    <ArticleCardSection style={ArticleListStyle.headerContentStyle}>
      <View style={{ marginBottom: 12, marginLeft: 8, marginRight: 8, marginTop: 15 }}>
      <Text style={ArticleListStyle.headerTextStyle}>
        <HTMLView
          value={'<p>' + this.state.title + '</p>'}
          stylesheet={styles.headlineCSS}
        />
      </Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>
      </View>
      <View style={ this.state.isLast ? { paddingBottom: 8 } : ArticleListStyle.borderStyle }>
      </View>
    </ArticleCardSection>
    </TouchableOpacity>
  )
}
}
}
const styles = {
  headlineCSS: {
    p: {
      fontSize: 16,
      fontWeight: '500',
      justifyContent: 'center',
    }
  },
  cartoonStyle: {
    width: 150,
    height: 125,
    flex: 1
  }
}


export default HeadlineArticle;
