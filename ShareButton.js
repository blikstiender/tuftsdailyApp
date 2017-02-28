import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';

const ShareButton = () => {
    const { buttonStyle, buttonImageStyle } = styles;
  return (
    <TouchableOpacity>
        <Image
          style={buttonImageStyle}
          source={require('./shareicon.png')}
        />
    </TouchableOpacity>
  );
};

const styles = {
  buttonImageStyle: {
    alignSelf: 'center',
    height: 20,
    width: 20,
    marginBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default ShareButton;
