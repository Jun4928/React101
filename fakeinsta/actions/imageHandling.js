export default (data = []) => {
  const dateHandling = (created) => {
    return created.substring(0, 10).replace(/-/gi, ".");
  };

  const images = data.map( (result) => {
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

  return images;
}