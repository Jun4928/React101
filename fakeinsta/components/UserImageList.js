import React from 'react'; 
import { connect } from 'react-redux';
import UserImageItem from './UserImageItem';

const UserImageList = (props) => {

  const {images} = props;

  if (images.length === 0) return <div>Loading...</div>

  const renderImages = images.map((image) => {
    return (
      <UserImageItem key={image.id} image={image} />
    );
  });

  return (
    <div className="ui grid">
      {renderImages}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { images: state.imagesByUsername };
};  

export default connect(mapStateToProps)(UserImageList);