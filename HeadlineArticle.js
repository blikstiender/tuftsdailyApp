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
        this.setState({ authorID: responseData.name, isLoading: false});
      //  console.log(responseData)

        //console.log(this.state.articles);
        //console.log(this.state.articles[0].title.rendered)
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

render() {
  const goToArticle = () => Actions.pageThree({ article: this.props.article });
  //console.log('Rendering a headline article for ' + this.state.title);
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
        {/*<WebView style={{ height: 30 }} source={{html: this.state.title}} />*/}
      {/*  <Text style={ArticleListStyle.headerTextStyle}>{ this.state.title }</Text>*/}
      {/*<HTMLView
        value={'<p>' + this.state.title + '</p>'}
        stylesheet={styles.headlineCSS}
      />*/}
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
