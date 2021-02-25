import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileData from "../../store/actions/profileData";
import ApiProfile from "../../api/apiProfile";
import styled from "styled-components";
import motionLogo from "../LeftLogin/assets/images/logo.png";
import postsLogo from "../LeftLogin/assets/images/posts_logo.png";
import IconFriends from "../../layout/svgs/IconFriends";
import Bell from "../../layout/svgs/Bell";
import Menu from "../../layout/svgs/Menu";
import history from "../../history";
// import search from "../LeftLogin/assets/svgs/search_icon.svg"
import jennifer from "../LeftLogin/assets/images/users/jennifer.png";

const Wrapper = styled.div`
  width: 100vw;
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  /* box-shadow: 0 4px 40px 4px #dedede; */
`;

const LeftItems = styled.section`
  display: flex;
`;

const MotionLogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 80px 0 20px;
`;

const MotionLogo = styled.img`
  width: 30px;
  height: 30px;
  padding: 30px 10px;
`;

const PostsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;

  :hover {
    border-bottom: 2px solid #b192fe;
  }
`;

const PostsLogo = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`;

const FriendsLogoContainer = styled.div`
  display: flex;
  align-items: center;
  & p {
    padding: 10px;
  }

  :hover {
    border-bottom: 2px solid #b192fe;
  }
`;

const RightItems = styled.section`
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;
  justify-content: space-around;
  margin-right: 40px;
`;

const Avatar = styled.img`
  padding: 0 30px;
`;

const NavBar = () => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const response = await ApiProfile();
      dispatch(ProfileData(response));
    } else {
      history.push("/");
    }
  }, []);

  return (
    <Wrapper>
      <NavContainer>
        <LeftItems>
          <MotionLogoContainer>
            <MotionLogo src={motionLogo} alt="motionlogo" />
            <h3>Motion</h3>
          </MotionLogoContainer>

          <PostsLogoContainer>
            <PostsLogo src={postsLogo} alt="postsLogo" />
            <p>Posts</p>
          </PostsLogoContainer>

          <FriendsLogoContainer>
            <IconFriends />
            <p>Find Friends</p>
          </FriendsLogoContainer>
        </LeftItems>

        <RightItems>
          <Bell />
          <Avatar src={jennifer} alt="jennifer" />
          <Menu />
        </RightItems>
      </NavContainer>
    </Wrapper>
  );
};

export default NavBar;
