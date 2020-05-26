import React from 'react';

class ImageItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {spans: 0};

    this.imageElementRef = React.createRef(); // to access to the DOM Element
  }

  componentDidMount() {
    this.imageElementRef.current.addEventListener('load', this.onImageLoad);
  }

  onImageLoad = () => {
    const height = this.imageElementRef.current.clientHeight;
    const spans = Math.ceil(height / 10);

    this.setState({spans: spans}); // set spans at grid-row-end property
  }

  render() {
    const {alt_description, urls} = this.props.image;

    return (
     <div style={{gridRowEnd: `span ${this.state.spans}`}}>
       <img ref={this.imageElementRef} alt={alt_description} src={urls.small} />
     </div> 
    );
  }

}

export default ImageItem;