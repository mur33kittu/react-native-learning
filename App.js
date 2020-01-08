import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';
import Search from './components/search';
import Constants from 'expo-constants';
import Card from './components/card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      searchValue: null,
    };
  }

  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Search recipeData={data => this.setState({recipes: data})} />
        {this.state.recipes ? (
          <FlatList
            style={styles.container}
            data={this.state.recipes.hits}
            renderItem={({item}) => <Card recipe={item.recipe} />}
            keyExtractor={item => item.recipe.uri}
          />
        ) : null}
      </SafeAreaView>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});
