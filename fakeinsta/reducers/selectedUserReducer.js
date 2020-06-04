export default (selectedUser = null, action) => {
  switch (action.type) {
    case 'USER_SELECT':
      return action.payload;
    default: 
      return selectedUser;
  }
};