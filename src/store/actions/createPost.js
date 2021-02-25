import { createPostApi } from "../../api/apiPosts";
import history from "../../history";

const createPost = (newPost) => async (dispatch) => {
  console.log("something");
  const response = await createPostApi(newPost, "posts/");
  dispatch({ type: "CREATE_POST", payload: response });
  history.push("/feed");
};

export default createPost;
