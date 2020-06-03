import React from 'react'; 
import { connect } from 'react-redux';
import ImageItem from './ImageItem';

const ImageList = (props) => {

  const {images} = props;

  if (images.length === 0) return <div>Please search images</div>

  const renderImages = images.map((image) => {
    return (
      <ImageItem key={image.id} image={image} />
    );
  });

  return (
    <div className="ui three stackable cards">
      {renderImages}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { images: state.images };
};  

export default connect(mapStateToProps)(ImageList);