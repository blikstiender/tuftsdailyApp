import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';

class HeadlineArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.article.title.rendered, authorID: props.article.author, isLoading: true};
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
        console.log('Error fetching');
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
    <ArticleCardSection style={styles.headerContentStyle}>
      <View style={{ marginBottom: 12, marginLeft: 8, marginRight: 8, marginTop: 15 }}>
        <Text style={styles.headerTextStyle}>{ this.state.title }</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 8, marginRight: 8, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 10 }}>{this.state.authorID}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./hearticon.png')} style={styles.iconStyle}/>
        <Text style={{ color: '#778899', fontSize: 10 }}>21</Text>
        </View>
      </View>
      <View style={styles.borderStyle}>
      </View>
    </ArticleCardSection>
    </TouchableOpacity>
  )
}
}
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    justifyContent: 'center'

  },

  descriptionTextStyle: {
    fontSize: 12,
    color: '#696969',
  },

  imageStyle: {
    height: 200,
    width: null,
    flex: 1,

  },

  iconStyle: {
    height: 12,
    width: 12
  },

  borderStyle: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    height: 2,
    marginLeft: 8,
    marginRight: 8

  }
};

export default HeadlineArticle;
