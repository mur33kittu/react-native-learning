import React from 'react';
import {RecipeService} from '../../services/recipeService';
import {Button, TextInput} from 'react-native';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchValue: null,
    };
    this.searchKeyword = this.searchKeyword.bind(this);
  }

  searchKeyword = async () => {
    if (this.state.searchValue) {
      await RecipeService.getRecipe(this.state.searchValue).then(res => {
        this.props.recipeData(res.data);
      });
    }
  };

  render() {
    return (
      <>
        <TextInput
          style={{height: 40}}
          placeholder="Enter your menu keyword"
          onChangeText={text => this.setState({searchValue: text})}
        />
        <Button onPress={this.searchKeyword} title="Search Recipe" />
      </>
    );
  }
}

export default Search;
