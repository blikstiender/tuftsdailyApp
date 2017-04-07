import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import HeadlineArticle from './HeadlineArticle';
import SearchResultArticle from './SearchResultArticle';
import ArticleCard from './ArticleCard';
import Images from 'assets';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], query: props.data, isLoading: true, animating: true, numArticles: 0, text: props.data };
}

componentWillMount() {
//  console.log('Will mount')
  if (this.state.query) {
    this.fetchResults();
  }
}

closeActivityIndicator() {
      setTimeout(() => {
         this.setState({animating: false});
      }, 2000);
   }
   componentDidMount() {
      this.closeActivityIndicator();
   }

  fetchResults() {
    fetch("https://tuftsdaily.com/wp-json/wp/v2/posts?search=" + this.state.query+"&per_page=20")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ articles: responseData, isLoading: false, numArticles: responseData.length });
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }

  renderResults() {
    console.log(this.state.articles)
    if (this.state.numArticles == 0) {
      return (
        <View style={{ marginTop: 200, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Sorry we couldn't find anything to fit your search</Text>
      </View>
      )
    }
    else {
      return this.state.articles.map(article =>
        <SearchResultArticle key={article.id} article={article} />
      );
    }
  }

  render() {
    const goBack = () => Actions.pop();
    const goToSearch = () => Actions.searchResults(this.state.text);
    const goToSectionList = () => Actions.sectionList();
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Jumbo is getting your results</Text>
          <ActivityIndicator
            style={{ paddingTop: 15 }}
            size="large"
        />
        </View>
    );
    }
    else {
    return (
      <View style={{ flex: 0, backgroundColor: '#e4e4e4', height: require('Dimensions').get('window').height, }}>
        <ScrollView style={{ marginLeft: 5, marginRight: 5, backgroundColor: 'white' }}>
        <View style={{marginTop: 30, marginLeft: 10, marginRight: 10 }}>
        <TextInput
    style={{height: 40, width: require('Dimensions').get('window').width * .8, paddingLeft: 5, borderColor: '#797979', borderWidth: 0.5, borderRadius: 10  }}
    placeholder="Search"
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
    onSubmitEditing={goToSearch}
    clearButtonMode="always"
    returnKeyType="search"
  />
</View>
        <View style={{ marginBottom: 5, marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: '#797979', fontSize: 12 }}>{this.state.numArticles}</Text>
        <Text style={{ color: '#797979', fontSize: 10 }}> {this.state.numArticles == 1 ? 'result':'results'}</Text>
      </View>
        {this.renderResults()}
      </ScrollView>
      <TouchableOpacity /*onPress={goBack}*/ onPress={goToSectionList} style={{position: 'absolute', left: 30, bottom: 20, justifyContent: 'center'}}>
        <Image source={Images.backarrow} style={{ height: 40, width: 40}} />
      </TouchableOpacity>
    </View>
    );
  };
}
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: require('Dimensions').get('window').height * 0.75,
  }
}

export default SearchResults;
