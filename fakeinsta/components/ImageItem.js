import React from 'react'
import { connect } from 'react-redux';
import { likeImage, userSelect } from '../actions/';
import { Link } from 'react-router-dom';

const ImageItem = (props) => {
  const { image } = props;

  const toUserDeatil = () => {
    props.userSelect(image.userName);
  };

  return (
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">{image.date}</div>
        <Link style={{textDecoration: 'none'}} onClick={toUserDeatil} to="/userdetail">
          <img alt={image.userName} className="ui avatar image" src={image.userImageUrl} />
          {image.userName}
        </Link>
        </div>
      <div className="image">
        <img alt={image.alt} src={image.imageUrl}/>
      </div>
      <div className="content">
        <span className="right floated">
          <i onClick={() => props.likeImage(image)} className="heart outline like icon"></i>
          {image.likes}
        </span>
        <div>
          {image.description}
        </div>
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

export default connect(mapStateToProps, { likeImage, userSelect })(ImageItem);