export default (images = [], action) => {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return action.payload;
    case 'LIKE_IMAGE':
      return images.map((image) => { // return new array of images with the changed image
          return image.id === action.payload.id ? action.payload : image} // override the changed one
      );
    default:
      return images;
  }
};