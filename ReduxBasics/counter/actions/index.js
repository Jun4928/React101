// action creators
// return Plain JavaScript Object that requires type.. and payload, which is optional

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
}
