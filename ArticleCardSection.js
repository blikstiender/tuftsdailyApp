import React from 'react';
import { View } from 'react-native';

const ArticleCardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
  //  borderBottomWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  //  borderColor: '#ddd',
    position: 'relative',

  }
};

export default ArticleCardSection;
