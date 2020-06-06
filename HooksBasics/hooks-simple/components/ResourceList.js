import React, { useState } from 'react';
import useResources from './useResources';

const ResourceList = (props) => {
  const { resource } = props; 
  const [ fetchedData , setFetchedData ] = useState([]);

  const loading = useResources(resource, setFetchedData);

  const renderLoading = () => {
    if(loading) return <div>Loading...</div>
    if(!loading) return null;
  };

  const renderData = fetchedData.map( (data) => {
    return (
      <div key={data.id}>
        <li>
          {data.title}
        </li>
      </div>
    );
  });
  
  return(
    <div>
      {renderLoading()}
      {resource}
      {renderData}
    </div>
  )
};

export default ResourceList;