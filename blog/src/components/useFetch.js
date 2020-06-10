import { useState, useEffect } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export default (resource, setCallback, loaded, setLoaded) => {
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    const response = await jsonPlaceholder.get(`${resource}`);
    setCallback(response.data.reverse()); 

    setLoaded(true);
    setLoading(false);
  };

  useEffect( () => {
    if(!loaded) getPosts();
    // eslint-disable-next-line
  }, []);

  return loading;
}