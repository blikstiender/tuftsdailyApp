import React, { Component } from 'react';
import { Text, Image, TouchableOpacity, Share } from 'react-native';

import Images from 'assets';

class ShareButton extends Component {
  constructor(props) {
    super(props);

    //this._shareMessage = this._shareMessage.bind(this);
    //this._shareText = this._shareText.bind(this);
    //this._showResult = this._showResult.bind(this);

    this.state = {
      result: ''
    };
  }

  shareArticle() {
    console.log("Trying to share")
      Share.share({
        url: this.props.articleURL
        //console.log(message);
      },
      )
      //.then(this._showResult)
      .catch((error) => console.log(error));
    }
    render() {
  return (
    <TouchableOpacity onPress={() => this.shareArticle()}>
        <Image
          style={styles.buttonImageStyle}
          source={Images.shareicon}
        />
    </TouchableOpacity>
  );
}
};

const styles = {
  buttonImageStyle: {
    alignSelf: 'center',
    height: 30,
    width: 30,
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
