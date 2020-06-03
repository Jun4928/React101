import React from 'react'
import { connect } from 'react-redux';
import { likeImage } from '../actions/';

const ImageItem = (props) => {
  const {image} = props;

  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">{image.date}</div>
        <img alt={image.userName} className="ui avatar image" src={image.userImageUrl} />
        {image.userName}
      </div>
      <div className="image">
        <img alt={image.alt} src={image.imageUrl}/>
      </div>
      <div className="content">
        <span className="right floated">
          <i onClick={() => props.likeImage(image)} className="heart outline like icon"></i>
          {image.likes}
        </span>
      </div>
      <div className="extra content">
        {image.color}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {  
  return { image: state.images.find((image) => image.id === ownProps.image.id) };
};

export default connect(mapStateToProps, { likeImage })(ImageItem);