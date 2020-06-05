import React from 'react'

const UserImageItem = (props) => {
  const { image } = props;

  return (
    <div className="eight wide column">
      <img alt={image.alt} src={image.imageUrl} style={{width: '100%'}}/>
    </div>
  );
};

export default UserImageItem;
