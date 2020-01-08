import axios from 'axios';

const APIInfo = {
  APP_ID: '67b2da07',
  APP_KEY: 'c58209135d2b095f91b1f7d598521698',
  API_SEARCH_URL: 'https://api.edamam.com/search?q=',
};

const getRecipe = async searchValue => {
  console.log(`${APIInfo.API_SEARCH_URL}${searchValue}&app_id=${APIInfo.APP_ID}&app_key=${APIInfo.APP_KEY}`);
  return await axios.get(
    `${APIInfo.API_SEARCH_URL}${searchValue}&app_id=${APIInfo.APP_ID}&app_key=${APIInfo.APP_KEY}`
  );
};

export const RecipeService = {
  getRecipe: getRecipe,
};
