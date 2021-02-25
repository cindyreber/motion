const postsAction = (posts) => {
  return {
    type: "FRIENDS_POSTS",
    payload: posts,
  };
};

export default postsAction;
