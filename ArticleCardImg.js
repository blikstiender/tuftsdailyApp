import React from 'react';
import { View } from 'react-native';

const ArticleCardImg = (props) => {
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
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 10,
    }
  };

  export default ArticleCardImg;
