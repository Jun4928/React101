import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props); // get props

    this.state = {spans: 0}; // initialize

    this.imageElementRef = React.createRef(); //create Image Element Reference in order to access to DOM
  }

  componentDidMount() {
    this.imageElementRef.current.addEventListener('load', this.onImageLoad); // when image loaded, handle the grid-row-end span value
  }

  onImageLoad = () => {
    const height = this.imageElementRef.current.clientHeight;
    const spans = Math.ceil(height / 2); // grind-row-end 속성을 결정해 주기 위한 값, 잘게쪼갤수록 grid row 간의 간격이 줄어들게 된다. 
    this.setState({spans: spans});
  }

  render() {
    const {alt_description, urls} = this.props.image;

    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageElementRef} alt={alt_description} src={urls.small}/> 
      </div>
    );
  }

}


export default ImageCard;