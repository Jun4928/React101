import { useState, useEffect } from 'react';

export default () => {
  const [ position, setPosition ] = useState(null);
  const [ message, setMessage ] = useState('Loading...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (success) => {
          setPosition(success.coords);
        },
        (error) => {
          setMessage(error.message);
        }
    );
  }, []);

  return [position, message];
};