import './ImageItem.css';
import React, {useState, useEffect} from 'react';
import faker from 'faker';

const ImageItem = (props) => {
  const {image} = props;
  const [data, setData] = useState({}); // state

  useEffect( () => { // componenDidMount()
    const data = {
      'author': faker.name.lastName(),
      'date': faker.date.recent().toDateString(),
      'text': faker.lorem.words()
    };
    setData(data);
  }, []);
  
  const onImageClick = () => {
    props.onImageClick(image, data);
  }

  return (
    <div onClick={onImageClick} className="image-item">
      <img alt={image.alt_description} src={image.urls.regular}/>
      <div className="header">{data.author}</div>
      <div>{data.date}</div>
    </div>
  );
};

export default ImageItem; 