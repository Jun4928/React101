import React from 'react';

const ContentViewer = (props) => {

  if(props.content === null) return <div className="content-viewer"></div>;

  const showContent = () => {
    if(props.content.type === "video") {
      const {id, title, description} = props.content;
      return (
        <div className="content-viewer video">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${id}`}>
          </iframe>
          <div className="info">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
        );
      }

    if(props.content.type === "image") {
      const {alt, url, description} = props.content;
      return (
        <div className="content-viewer image">
          <img src={url} alt={alt} />
          <div className="info">
            <div className="description">{description}</div>
          </div>
       </div>
      )

    }
  };

  return (
    <div>
      {showContent()}
    </div>
  );
}

export default ContentViewer;