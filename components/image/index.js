/* @flow */

import React, {Component} from 'react'; // eslint-disable-line no-unused-vars

import {Image, View, Text} from 'react-native';

export default class AsyncImage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <View>
        <Image
          source={{uri: this.props.source}}
          style={{width: 200, height: 100, flex: 1}}
          resizeMode={'cover'}
        />
      </View>
    );
  }
}
