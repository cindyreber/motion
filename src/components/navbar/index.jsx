import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProfileData from "../../store/actions/profileData";
import { apiProfile } from "../../api/apiProfile";
import { getPostsApi } from "../../api/apiPosts";
import styled from "styled-components";
import motionLogo from "../LeftLogin/assets/images/logo.png";
import postsLogo from "../LeftLogin/assets/images/posts_logo.png";
import IconFriends from "../../layout/svgs/IconFriends";
import Bell from "../../layout/svgs/Bell";
import Menu from "../../layout/svgs/Menu";
import history from "../../history";
import { ReactComponent as MenuIcon } from "../LeftLogin/assets/svgs/menu.svg";
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

const DropdownList = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

const ListStyle = styled.li`
  list-style: none;
  padding: 10px;
  width: 80px;
  font-size: 14px;

  :hover {
    background-color: white;
  }
`;

const DropdownMenu = () => {
  const history = useHistory();

  const routeChangeToProfile = () => {
    let path = `/profile`;
    history.push(path);
  };

  const routeChangeLogout = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <DropdownList className="dropdown">
      <ul>
        <ListStyle onClick={routeChangeToProfile}>
          <i className="fas fa-user-alt"></i>Profile
        </ListStyle>
        <ListStyle onClick={routeChangeLogout}>Logout</ListStyle>
      </ul>
    </DropdownList>
  );
};

const NavIcon = styled.div`
  position: relative;
`;

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <NavIcon className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </NavIcon>
  );
};

const NavBar = () => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const response = await apiProfile();
      dispatch(ProfileData(response));
    } else {
      history.push("/");
    }
  }, []);

  // api call working
  const handleClick = () => {
    // history.push('/friends')             redirect to the future friends cards
    console.log("inside");
    const asyncCall = async () => {
      const res = await getPostsApi("friends/");
      console.log(res, "res from navbar friends call api");
    };
    asyncCall();
  };

  const history = useHistory();
  const routeChange = () => {
    let path = `/feed`;
    history.push(path);
  };

  return (
    <Wrapper>
      <NavContainer>
        <LeftItems>
          <MotionLogoContainer onClick={routeChange}>
            <MotionLogo src={motionLogo} alt="motionlogo" />
            <h3>Motion</h3>
          </MotionLogoContainer>

          <PostsLogoContainer>
            <PostsLogo src={postsLogo} alt="postsLogo" />
            <p>Posts</p>
          </PostsLogoContainer>

          <FriendsLogoContainer>
            <IconFriends />
            <p onClick={handleClick}>Find Friends</p>
          </FriendsLogoContainer>
        </LeftItems>

        <RightItems>
          <Bell />
          <Avatar src={jennifer} alt="jennifer" />
          <NavItem icon={<MenuIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </RightItems>
      </NavContainer>

      {/* <SearchContainer>
            <SearchBar>
                <Magnifyer src={search}/>
                <InputField type="text" placeholder="Search posts..."></InputField>
            </SearchBar>

            <RightButtonContainer>
                <RightButton>Liked</RightButton>
                <RightButton>Friends</RightButton>
                <RightButton>Follow</RightButton>
            </RightButtonContainer>
        </SearchContainer> */}
    </Wrapper>
  );
};

export default NavBar;
