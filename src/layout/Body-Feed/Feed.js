import React from 'react';
import styled from "styled-components";
import Navbar from "../../components/navbar/index"
import Searchbar from '../../components/searchbar/index'

const Grid = styled.div `
  max-width: 70rem;
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: masonry;
  grid-auto-flow: dense;
  grid-gap: 1em; */
  /* align-tracks: end; */
  display: column;
  columns: 2;
  gap: 2em;
  & >* {
      break-inside: avoid;
  }
`
const Content = styled.div `
   box-shadow: -1px 5px 13px -5px rgba(0,0,0,0.3);
   padding: 15px;
   margin-bottom: 30px;

`
const Main = styled.div `
height: 100vh;
`
const Nav = styled.nav `
 /* margin-bottom: 50px; */
/* padding: 20px; */
 box-shadow: 2px 2px 3px 0px rgba(50, 50, 50, 0.36);
`
const SearchNav = styled.div`
 margin-bottom: 50px;
`

const Status = styled.div`
      display: flex;
      align-items: center;
      padding: 20px;
      /* height: 120px;
      width: 560px; */
      & .far {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        height: 50px;
        width: 50px;
        background-color: #6e91f6;
        color: white;
       }
      & img {
        width: 70px;
        height: 70px;
        border-radius: 50px;
        } 
      & input {
        margin-left: 28.8px;
        margin-right: 10px;
        width: 20vw;
        background: none;
        border: none;
        font-size: 16px;
        color: black;
        opacity: 0.5;  
      }
      & input:focus {
          outline: none;
        } 
        
`
const SocialMedia = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: 20px; 
  & .social-media-buttons {
    display: flex; 
  }
  & .share {
  display: flex; 
  }
  & .share {
    color: #D8D8D8;
    margin-right: 10px; 
    align-items: center;
  }
  & .fa-share {
    color: #D8D8D8;
    margin-right: 10px;
  }
  & .like {
  display: flex;
  margin-right: 10px; 
  align-items: center;
  }
  & .like {
    color: #D8D8D8;
    margin-right: 10px; 
  }
  & .fa-heart{
    color: #D8D8D8;
    margin-right: 10px; 
  }
`
// const Image = styled.div`
// display: grid;
//   grid-template-columns: repeat(1fr); /* see notes below */
//   grid-gap: 1em;

// `

const Post = styled.div `
       background-color: white;
      /* background-color: white;
      box-shadow: 2px 2px 5px 0px rgba(50, 50, 50, 0.36);  */
      & .posts-details {
        display: flex;
        justify-content: space-between; 
      }
      & .moredetails{
        color: #D8D8D8;
      }
      & .user-detials {
        display: flex;
        align-items: center;
      }
      & .user-detials > img {
            width: 40px;
            height: 40px;
            border-radius: 50px; 
      }
      & .fa-ellipsis-v {
      color: #D8D8D8; 
      }

      & .pictures {
        display: flex;
        flex-wrap: wrap; 
        justify-content: center;
        align-items:center;
     }
     & .pictures > img {
          margin: 10px;
          display: block;
          border-radius: 5px;    
     }
     & .userpost-time {
        margin-left: 10px; 
        & p:nth-child(2) {  // need fix the it
          font-size: 14px;
          color: #D8D8D8;  
      }

     }
`


const Feed = () => {
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
           <img src="https://unsplash.it/200/201" alt=""/>
                <input type="text" placeholder="What’s on your mind, Jennifer?" />
                <i className="far fa-paper-plane"></i>
           </Status>
          </Content>
         <Content>
          <Post>
          <div className="posts-details">
                    <div className="user-detials">
                        <img src="https://source.unsplash.com/random/240x240" alt="" />
                        <div className="userpost-time">
                            <p>Jennifer Smith</p>
                            <p>Just now</p>
                        </div>
                    </div>
                    <div className="more-details">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>       
                
          <div className="status-text">
                    <p>"Airbending Is All About Spiral Movements. When You Meet Resistance, You Must Be
                        Able To Switch Direction At A Moment's Notice."</p>
          </div>
          <div className="pictures">
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
           </div>
          <SocialMedia>
                    <div className="social-media-buttons">
                        <div className="like">
                            <i className="fas fa-heart"></i>
                            <p>Like</p>
                        </div>
                        <div className="share">
                            <i className="fas fa-share"></i>
                            <p>Share</p>
                        </div>
                    </div>
                    <p> 10 likes</p>
          </SocialMedia>
         </Post>
        </Content> 
        <Content>
          <Post>
          <div className="posts-details">
                    <div className="user-detials">
                        <img src="https://source.unsplash.com/random/240x240" alt="" />
                        <div className="userpost-time">
                            <p>Jennifer Smith</p>
                            <p>Just now</p>
                        </div>
                    </div>
                    <div className="more-details">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>       
                
          <div className="status-text">
                    <p>"Airbending Is All About Spiral Movements. When You Meet Resistance, You Must Be
                        Able To Switch Direction At A Moment's Notice."</p>
          </div>
          <div className="pictures">
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
           </div>
          <SocialMedia>
                    <div className="social-media-buttons">
                        <div className="like">
                            <i className="fas fa-heart"></i>
                            <p>Like</p>
                        </div>
                        <div className="share">
                            <i className="fas fa-share"></i>
                            <p>Share</p>
                        </div>
                    </div>
                    <p> 10 likes</p>
          </SocialMedia>
         </Post>
        </Content> 
        <Content>
          <Post>
          <div className="posts-details">
                    <div className="user-detials">
                        <img src="https://source.unsplash.com/random/240x240" alt="" />
                        <div className="userpost-time">
                            <p>Jennifer Smith</p>
                            <p>Just now</p>
                        </div>
                    </div>
                    <div className="more-details">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>       
                
          <div className="status-text">
                    <p>"Airbending Is All About Spiral Movements. When You Meet Resistance, You Must Be
                        Able To Switch Direction At A Moment's Notice."</p>
          </div>
          <SocialMedia>
                    <div className="social-media-buttons">
                        <div className="like">
                            <i className="fas fa-heart"></i>
                            <p>Like</p>
                        </div>
                        <div className="share">
                            <i className="fas fa-share"></i>
                            <p>Share</p>
                        </div>
                    </div>
                    <p> 10 likes</p>
          </SocialMedia>
         </Post>
        </Content> 

        <Content>
          <Post>
          <div className="posts-details">
                    <div className="user-detials">
                        <img src="https://source.unsplash.com/random/240x240" alt="" />
                        <div className="userpost-time">
                            <p>Jennifer Smith</p>
                            <p>Just now</p>
                        </div>
                    </div>
                    <div className="more-details">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>       
                
          <div className="status-text">
                    <p>"Airbending Is All About Spiral Movements. When You Meet Resistance, You Must Be
                        Able To Switch Direction At A Moment's Notice."</p>
          </div>
          <div className="pictures">
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/random/240x240" alt=""/>
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/user/erondu/240x240" alt=""/>
                    </div>
           </div>
          <SocialMedia>
                    <div className="social-media-buttons">
                        <div className="like">
                            <i className="fas fa-heart"></i>
                            <p>Like</p>
                        </div>
                        <div className="share">
                            <i className="fas fa-share"></i>
                            <p>Share</p>
                        </div>
                    </div>
                    <p> 10 likes</p>
          </SocialMedia>
         </Post>
        </Content>    
    </Grid>
    </Main>
    )
}

export default Feed
