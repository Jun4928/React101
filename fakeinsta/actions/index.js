import unsplash from '../apis/unsplash'; 
import imageHandling from './imageHandling';

export const fetchImagesAndUsers = (keyword) => async (dispatch, getState) => {
  await dispatch(fetchImages(keyword));

  getState().images.map((image) => image.userName)
      .filter((username, index, arr) => arr.indexOf(username) === index) // delete duplication
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

  const images = imageHandling(response.data.results);
  dispatch({ type: 'FETCH_IMAGES', payload: images });
};


export const fetchUsers = (username) => async (disaptch) => {
  const response = await unsplash.get(`/users/${username}`)
  const { location, bio, total_photos, total_likes, profile_image } = response.data;  

  const user = {
    username,
    location,
    bio,
    totalPhotos: total_photos,
    totalLikes: total_likes,
    profileImageURL: profile_image.large
  };

  disaptch({ type: 'FETCH_USERS', payload: user });
}

export const fetchImagesByUsername = (username) => async (dispatch) => {
  const response = await unsplash.get(`/users/${username}/photos`)
  const imagesByUsername = imageHandling(response.data); 

  dispatch({ type: 'FETCH_IMAGES_BY_USERNAME', payload: imagesByUsername});
}

export const makeImagesEmpty = () => {
  return {
    type: 'MAKE_IMAGES_EMPTY',
    payload: []
  };
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