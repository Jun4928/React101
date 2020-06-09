import { useState, useEffect } from 'react';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export default (resource, setCallback, loaded, setLoaded) => {
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    console.log('api calling');
    const response = await jsonPlaceholder.get(`${resource}`, {
      params: {
         numbers: 10,
        read: 20
      }
    });
    setCallback(response.data); 

    setLoaded(true);
    setLoading(false);
  };

  useEffect( () => {
    if(!loaded) getPosts();
    // eslint-disable-next-line
  }, []);

  return loading;
}