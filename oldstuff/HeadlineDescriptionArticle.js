import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';

const HeadlineDescriptionArticle = (props) => {
  const {
    title,
    description
  } = props;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    descriptionTextStyle
  } = styles;

return (
  <TouchableOpacity>
  <ArticleCardSection style={headerContentStyle}>
    <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
      <Text style={headerTextStyle}>{ title }</Text>
      <Text style={descriptionTextStyle}>{ description }</Text>
    </View>
    <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ color: '#778899', fontSize: 10 }}>Yotam Bentov</Text>
      <Text style={{ color: '#778899', fontSize: 10}}>21</Text>
    </View>
  </ArticleCardSection>
  </TouchableOpacity>
)
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '500',

  },
  descriptionTextStyle: {
    fontSize: 14,
    color: '#696969',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
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
  }
};

export default HeadlineDescriptionArticle;
