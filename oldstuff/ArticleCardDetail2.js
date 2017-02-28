import React from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import ArticleCard from './ArticleCard';
import ArticleCardSection from './ArticleCardSection';

const ArticleCardDetail2 = () => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle,
    descriptionTextStyle
  } = styles;

return (
  <ArticleCard>
    <ArticleCardSection style={headerContentStyle}>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={headerTextStyle}>Tony Monaco is a bad ass mothafucks</Text>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Text style={descriptionTextStyle}>Last week Tony Monaco was a bad ass</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>By Yotam Bentov</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
    <ArticleCardSection style={headerContentStyle}>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={headerTextStyle}>Tony Monaco is a gansta</Text>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Text style={descriptionTextStyle}>Last week Tony Monaco bought a motorcycle</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>By Suneeth Keerthy</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>42</Text>
      </View>
    </ArticleCardSection>
    <ArticleCardSection style={headerContentStyle}>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }}>
        <Text style={headerTextStyle}>Tony Monaco is a bad ass mothafucks</Text>
      </View>
      <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5 }}>
        <Text style={descriptionTextStyle}>Last week Tony Monaco was a bad ass</Text>
      </View>
      <View style={{ marginBottom: 5, marginLeft: 5, marginRight: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#778899', fontSize: 12 }}>By Yotam Bentov</Text>
        <Text style={{ color: '#778899', fontSize: 12 }}>21</Text>
      </View>
    </ArticleCardSection>
  </ArticleCard>
)

}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,

  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '500',

  },
  descriptionTextStyle: {
    fontSize: 16,
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

export default ArticleCardDetail2;
