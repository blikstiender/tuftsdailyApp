import React from 'react';
import { View } from 'react-native';

const ArticleCardArt = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
    );
  };

  const styles = {
    containerStyle: {
      borderWidth: 0,
      borderRadius: 0,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 0,
      elevation: 1,
      marginLeft: 8,
      marginRight: 8,
      marginTop: 0,
    }
  };

  export default ArticleCardArt;
