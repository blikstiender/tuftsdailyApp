import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HTMLView from 'react-native-htmlview';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';
import ArticleListStyle from './styles';
import Images from 'assets';

class HeadlineArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, authorID: props.article.author, isLoading: true, isLast: props.isLast};
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
  if (this.props.isLoading) {
    return (
      <Text></Text>
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
  }
}


export default HeadlineArticle;
