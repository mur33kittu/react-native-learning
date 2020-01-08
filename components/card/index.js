import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
import AsyncImage from '../image';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <View style={styles.container}>
        <AsyncImage
          source={this.props.recipe.image}
          key={this.props.recipe.uri}
          style={styles.item}
        />
        <View>
          <Text style={{color: 'blue', marginLeft: 20 }}>{this.props.recipe.label}</Text>
          {this.props.recipe.ingredientLines.map(itm => (
            <Text style={{color: 'grey', marginLeft: 20 }}>{itm}</Text>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20, 
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginRight: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
