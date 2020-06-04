import unsplash from '../apis/unsplash'; 

export const fetchImagesAndUsers = (keyword) => async (dispatch, getState) => {
  await dispatch(fetchImages(keyword));

  getState().images.map((image) => image.userName)
      .filter((username, index, arr) => arr.indexOf(username) === index)
      .forEach((username) => dispatch(fetchUsers(username)));
};


export const fetchImages = (keyword) => async (dispatch) => {
  const response = await unsplash.get('/search/photos', {
    params: {
      query: keyword,
      page: 1,
      per_page: 10
    }
  });

  const dateHandling = (created) => {
    return created.substring(0, 10).replace(/-/gi, ".");
  };
 
  const images = response.data.results.map( (result) => {
    return {
      id: result.id,
      alt: result.alt_description,
      description: result.description,
      color: result.color,
      likes: result.likes,
      imageUrl: result.urls.regular,
      userInsta: result.user.instagram_username,
      userName: result.user.username,
      userImageUrl: result.user.profile_image.medium,
      date: dateHandling(result.created_at)
    }
  });

  dispatch({ type: 'FETCH_IMAGES', payload: images });
};


export const fetchUsers = (username) => async (disaptch) => {
  const response = await unsplash.get(`/users/${username}`)
  const user = response.data;  
  console.log(user);
  disaptch({ type: 'FETCH_USERS', payload: user });
}


export const likeImage = (image) => {
  return {
    type: 'LIKE_IMAGE',
    payload: {...image, likes: image.likes + 1}
  };
} 


export const userSelect = (username) => {
  return {
    type: 'USER_SELECT',
    payload: username
  };
}