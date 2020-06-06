import { useState, useEffect } from 'react';
import delay from '../util/delay';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export default (resource, callback) => {
  const [loading, setLoading] = useState(false);

  const fetchData = async (resource) => {
    setLoading(true); // re-render the component 

    await delay(500);
    const response = await jsonPlaceholder.get(`/${resource}`);
    callback(response.data);

    setLoading(false); //re-render the component
  };

  useEffect( () => {
    callback([]);
    fetchData(resource);
  }, [resource]);

  return loading;
}