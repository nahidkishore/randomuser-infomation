const initialState = {
  dataUsers: [],
};

const UserList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        ...state,
        dataUsers: [action.AddData],
      };
    default:
      return state;
  }
};

export default UserList;
