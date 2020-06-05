export default (images = [], action) => {
  switch (action.type) {
    case 'FETCH_IMAGES_BY_USERNAME':
      return action.payload;
    case 'MAKE_IMAGES_EMPTY':
      return action.payload;
    default:
      return images;
  }
}