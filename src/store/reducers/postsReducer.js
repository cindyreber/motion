const initialState = {
  friends: [],
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FRIENDS_POSTS":
      return {
        ...state,
        friends: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
