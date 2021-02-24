import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import motionLogo from "../LeftLogin/assets/images/logo.png";
import postsLogo from "../LeftLogin/assets/images/posts_logo.png";
import IconFriends from "../../layout/svgs/IconFriends";
import Bell from "../../layout/svgs/Bell";
import Menu from "../../layout/svgs/Menu";
import jennifer from "../LeftLogin/assets/images/users/jennifer.png";

const baseURL = "https://motion.propulsion-home.ch/backend/";

const NavBar = () => {
  const NavContainer = styled.nav`
    height: 4.5vh;
    width: 100vw;
    background-color: white;
    /* border: 2px solid black; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const LeftItems = styled.section`
    min-width: 30%;
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
  `;
  const RightItems = styled.section`
    min-width: 20%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    padding-left: 10px;
    justify-content: space-around;
    & > * {
      margin-right: 0.5rem;
    }
  `;
  const MotionLogoContainer = styled.div`
    display: flex;
    align-items: center;
    & img {
      height: 2.5vh;
      margin-right: 0.5rem;
      cursor: pointer;
    }
    & h3 {
      cursor: pointer;
    }
  `;
  const LeftLogoContainer = styled.div`
    display: flex;
    align-items: center;
    & img {
      height: 1.5vh;
      margin-right: 0.5rem;
      cursor: pointer;
    }
    & p {
      cursor: pointer;
    }
  `;
  const RightLogoContainer = styled.div`
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    justify-content: flex-end;
    & img {
      margin-right: 0.8rem;
      cursor: pointer;
    }
  `;
  const AvatarMenuContainer = styled.div`
    display: flex;
  `;

  return (
    <>
      <NavContainer>
        <LeftItems>
          <MotionLogoContainer>
            <img src={motionLogo} alt="motionlogo" />
            <h3>Motion</h3>
          </MotionLogoContainer>
          <LeftLogoContainer>
            <img src={postsLogo} alt="postsLogo" />
            <p>Posts</p>
          </LeftLogoContainer>
          <LeftLogoContainer>
            <IconFriends />
            <p>Posts</p>
          </LeftLogoContainer>
        </LeftItems>
        <RightItems>
          <RightLogoContainer>
            <Bell id="bell" />
          </RightLogoContainer>
          <AvatarMenuContainer>
            <RightLogoContainer>
              <img src={jennifer} alt="jennifer" />
            </RightLogoContainer>
            <RightLogoContainer>
              <Menu />
            </RightLogoContainer>
          </AvatarMenuContainer>
        </RightItems>
      </NavContainer>
    </>
  );
};

export default NavBar;
