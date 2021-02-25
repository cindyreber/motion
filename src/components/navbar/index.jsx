import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ProfileData from "../../store/actions/profileData";
import ApiProfile from "../../api/apiProfile";
import styled from "styled-components";
import motionLogo from "../LeftLogin/assets/images/logo.png";
import postsLogo from "../LeftLogin/assets/images/posts_logo.png";
import IconFriends from "../../layout/svgs/IconFriends";
import Bell from "../../layout/svgs/Bell";
import Menu from "../../layout/svgs/Menu";
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

// const SearchContainer = styled.div`
// margin: 0 auto;
//  width: 100%;
//  max-width: 1200px; 
//  height: 80px;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  border-bottom: 1px solid #f5f5f5;
// `;

// const SearchBar = styled.div`
//  display: flex;
//  align-items: center;

// `;

// const InputField = styled.input`
// border: none;
// padding: 20px;
// background: transparent;
// margin-left: 20px;

// :focus {
//     outline: none !important;
//     box-shadow: 0 0 10px #b192fe;
//     //border:1px solid #b192fe;
// }`;

// const Magnifyer = styled.img`
// padding: 2px;
// `;

// const RightButtonContainer = styled.div`
//  display: flex;
// `;

// const RightButton = styled.p`
//     margin: 0 20px;
//     color: grey;
//     padding: 30px 0;

//     :hover {
//         border-bottom: 2px solid black;
//         color: black;
//     }
// `;

const NavBar = () => {
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  console.log(user, "in user");

  useEffect(async () => {
    const response = await ApiProfile();
    console.log(response, "from useEffect");
    dispatch(ProfileData(response));
  }, []);

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
                <p>Find Friends</p>
            </FriendsLogoContainer>
            </LeftItems>

            <RightItems>
                <Bell />
                <Avatar src={jennifer} alt="jennifer" />
                <Menu />
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
