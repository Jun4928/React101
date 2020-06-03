import unsplash from '../apis/unsplash'; 
import faker from 'faker';

export const fetchImages = (keyword) => async (dispatch) => {
  console.log(keyword);
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
      description: faker.lorem.sentences(),
      color: result.color,
      likes: result.likes,
      imageUrl: result.urls.small,
      userInsta: result.user.instagram_username,
      userName: result.user.first_name,
      userImageUrl: result.user.profile_image.medium,
      date: dateHandling(result.created_at)
    }
  });

  dispatch({ type: 'FETCH_IMAGES', payload: images });
};

export const likeImage = (image) => {
  return {
    type: 'LIKE_IMAGE',
    payload: {...image, likes: image.likes + 1}
  };
} 
