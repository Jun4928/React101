import unsplash from '../apis/unsplash'; 

export const fetchImages = (keyword) => async (dispatch) => {
  console.log(keyword);
  const response = await unsplash.get('/search/photos', {
    params: {
      query: keyword,
      page: 1,
      per_page: 10
    }
  });

  const results = response.data.results;
  console.log(results);

  dispatch({ type: 'FETCH_IMAGES', payload: results });
};