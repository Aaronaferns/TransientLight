import React from 'react';
import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
        <Nav>
            <a href="/home">
                <img src="/images/Logo2.png" alt=""/>
            </a>
            <div id="JoinBox">
            <Join>Join now</Join>
            <Signin>Sign in</Signin>
            </div>
            
        </Nav>
        <Section>
           
        <WelcomeMessage>
        <h1>Step into the realm of <strong>Transient Light!</strong></h1><h4>Where the dreamy and the creative converge. </h4> 
        <h6>Log in to unlock the door to your boundless imagination, <br/>where your wildest creations can come to life.</h6>
        </WelcomeMessage>
        <FrontImage src="/images/dreams.png" alt=""></FrontImage>
        <Oauth>
        <AuthButton id="Google" href=""><img src="/images/Logos/google-logo.webp" alt=""></img>Sign in with Google</AuthButton>
        <AuthButton id="Facebook" href=""><img src="/images/Logos/Fb-logo.png" alt=""></img>Sign in with Facebook</AuthButton>
        </Oauth>
       
        </Section>
    </Container>
  )
};
const WelcomeMessage= styled.div`
color:white;
@media (max-width : 764px){ 
       margin: auto;
       text-align: center; 
        }

`;
const FrontImage= styled.img`
    width: 500px;
    height: 500px;
    /* display: block; */
    box-shadow: -2px 5px 10px 2px black;
    border-radius: 1200px;
    margin: 0 50px 50px;
    :hover{
        box-shadow: -2px 5px 10px 2px #ffffb3;
    }
    @media (max-width : 764px){ 
        width: 350px;
        height: 350px;
        }
        @media (max-width : 764px){ 
       margin: auto;
        }

`;
const Oauth = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    & > #Google{
        background: blue;
        :hover{
            background:#3333ff;
            color:#ffffe6;
        }
    }
    & > #Facebook{
        :hover{
            background:#8a00e6;
            color:#ffffe6;
        }
    }
    @media (max-width : 764px){
        flex-direction: column;
      

        }
`;
const AuthButton = styled.a`
  text-decoration:none;
color:white;
background: purple;
padding: 5px 10px;
margin: 20px 20px;
border-radius: 30px;
width: 300px;
display: flex;
font-size: 25px;
text-align: center;
justify-content: center;
align-items: center;

@media (max-width : 764px){
    padding: 15px 15px;
      font-size:19px;
        }
& > img{
    width:30px;
    height:30px;
    margin-right:20px;
}        
`;



const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px;
    justify-content: space-around;
   max-width:1400px;

`;


const Container = styled.div`
    padding: 0px;
/*    
    background-image: url("/images/Northern-Lights-Washington-image.jpg");
    background-repeat: no-repeat;
    background-size: 100vw;
    background-attachment: fixed; */

`;

const Join = styled.a`
    color : #f2f2f2;
    font-size: 30px;
    width: 160px;
    padding:7px 16px;
    text-align:center;
    height:34px;
    margin-right: 30px;
    border-radius: 10px;
    cursor:pointer;
    :hover{
        background-color: #ff7799;
        point
    }
    @media (max-width : 764px){
           font-size:20px;
           margin-right: 20px;
      

        }
  

`;
const Signin = styled.a`
    margin-right: 40px ;
    padding: 4px 18px;
    border: 5px solid;
    border-color:#66ccff;
    border-radius:30px;
    font-size:25px;
    color:#cceeff;
    font-weight:1000;
    text-align: center;

    box-shadow: -2px 5px 10px 2px rgba(142,159,186,0.83);
    :hover{
        background-color:#e6f7ff ;
        color:#0077b3;
        cursor:pointer;
    }
    @media (max-width : 764px){
           font-size:20px;
           margin-right: 0px;
           padding: 4px 15px;
      

        }

`;
const Nav = styled.nav`
    max-width: 1700px;
    height: 60px;
    @media (max-width : 764px){
            height:45px;
        }
    margin: auto;
    padding: 2px 0 4px;
    display:flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    background: black;
    &> JoinBox{
        display: :flex;
        flex-direction: row;
        align-items: center;
    }

    & > a{
        text-decoration:none;
        width: 135px;
        height: 40px;
        @media (max-width : 764px){
            padding: 0px 5px;
            height:45px;
        }
        & > img{
            height: 100%;
            border-radius:100px;
            :hover{
                box-shadow: -1px 0px 15px 1px rgba(255,255,255,0.75);
-webkit-box-shadow: -1px 0px 15px 1px rgba(255,255,255,0.75);
-moz-box-shadow: -1px 0px 15px 1px rgba(255,255,255,255);
            }

        }
        
    }
   
`;


export default Login