const initialState = {
  friends: [],
};

const postsReducer = (state = initialState, action) => {
  console.log(state, "stateeee reducer");
  switch (action.type) {
    case "LIST_POSTS":
      return {
        ...state,
        friends: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    default:
      return state;
  }
};

export default postsReducer;
