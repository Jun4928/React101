import React from 'react';

const CommentDetail = (props) => {
  const {img, author, date, text} = props; // destructuring

  return(
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={img} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;