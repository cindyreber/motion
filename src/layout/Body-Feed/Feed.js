import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import postsFriends from "../../store/actions/postsFriends";
import Navbar from "../../components/navbar/index";
import Searchbar from "../../components/searchbar/index";
import {
  Main,
  Nav,
  SearchNav,
  Grid,
  Content,
  Status,
  Post,
  SocialMedia,
} from "../feedStyle";
import { getPostsApi } from "../../api/apiPosts";

const Feed = () => {
  const posts = useSelector((state) => state.posts.posts);
  console.log(posts, "posts before return");
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await getPostsApi("posts/");
    dispatch(postsFriends(res));
  }, []);
  return (
    <Main>
      <Nav>
        <Navbar />
      </Nav>
      <SearchNav>
        <Searchbar />
      </SearchNav>
      <Grid>
        <Content>
          <Status>
            <img src="https://unsplash.it/200/201" alt="" />
            <input type="text" placeholder="What’s on your mind, Jennifer?" />
            <i className="far fa-paper-plane"></i>
          </Status>
        </Content>
        {posts.length
          ? posts.map((post) => {
              return (
                <Content>
                  <Post>
                    <div className="posts-details">
                      <div className="user-detials">
                        <img
                          src="https://source.unsplash.com/random/240x240"
                          alt=""
                        />
                        <div className="userpost-time">
                          <p>
                            {post.user.first_name && post.user.last_name
                              ? `${post.user.first_name} ${post.user.last_name}`
                              : post.user.username}
                          </p>
                          <p>Just now</p>
                        </div>
                      </div>
                      <div className="more-details">
                        <i className="fas fa-ellipsis-v"></i>
                      </div>
                    </div>

                    <div className="status-text">
                      <p>{post.content}</p>
                    </div>
                    <div className="pictures">
                      <div>
                        {post.images.length ? (
                          post.images.map(({ image }) => (
                            <img className="postImage" src={image} alt="" />
                          ))
                        ) : (
                            <>
                          <img
                            src="https://source.unsplash.com/random/240x240"
                            alt=""
                          />
                          <img
                            src="https://source.unsplash.com/user/erondu/240x240"
                            alt=""
                          />
                          </>
                        )}
                      </div>
                    </div>
                    <SocialMedia>
                      <div className="social-media-buttons">
                        <div className="like">
                          <i className="fas fa-heart"></i>
                          <p>{post.user.amount_of_likes}Like</p>
                        </div>
                        <div className="share">
                          <i className="fas fa-share"></i>
                          <p>Share</p>
                        </div>
                      </div>
                      <p> {post.user.amount_of_likes} likes</p>
                    </SocialMedia>
                  </Post>
                </Content>
              );
            })
          : "loading"}
      </Grid>
    </Main>
  );
};

export default Feed;
