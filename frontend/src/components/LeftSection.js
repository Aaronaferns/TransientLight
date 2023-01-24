import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import {MdPerson } from 'react-icons/md';
import {BiHash } from 'react-icons/bi';
import "../styles/LeftSection.css"
import Logo from './Logo';
import Tabs from './Tabs';


const LeftSection = () => {
  return (
    <div className="leftSection">

        <Search>
            <Logo/>
            <SearchBar>
               <BsSearch/>
               <input type="text" placeholder="Search the Realm "></input>
            </SearchBar>
        </Search>

        <Options>
          <Logo/>
          <div className="optionButtons">
            <a href="/home" className="homeButton"><AiOutlineHome color="#6E85B2" size={20}/></a>
            <a href="/home" className="personalButton"><MdPerson color="#6E85B2" size={20}/></a>
            <a href="/home" className="exploreButton"><BiHash color="#6E85B2" size={20}/></a>
          </div>
        </Options>

        <Rooms>
          <Chatroom><Tabs/></Chatroom>
          <Pages><Tabs/></Pages>
        </Rooms>

    </div>
  )
}


const Search= styled.div`
  display: flex;
  align-items: center;
  & > a{
    margin-right: 10px;
    img{
      width:30px;
    }
  }
`;

const SearchBar= styled.div`
  padding:6px 10px;
  border-radius: 20px;
  min-width: 120px;
  max-width:190px;
  margin:0px 0 5px;
  display: flex;
  align-items: center;
  background: white;
  & > input{
    padding-left: 10px;
    border: none;
    max-width:170px;
    min-width: 100px;
    flex:1;
    border:none;
    outline-width: 0px;
  }
`;

const Options= styled.div`
  height:170px;
  margin:10px 0;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding: 17px 0px;
  box-sizing: border-box;
  background: #5C527F;
  border-radius: 15px;
  box-shadow: -1px 0px 5px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: -1px 0px 5px 1px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 0px 5px 1px rgba(0,0,0,0.75);
  & > a{
      img{
        width:80px;
        box-shadow: 1px 4px 11px 1px rgba(0,0,0,0.75);
        -webkit-box-shadow: 1px 4px 11px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 1px 4px 11px 1px rgba(0,0,0,0.75);
        border-radius: 50px;
      }
   }
  &> div{
    margin-top: 20px;
    height:40px;
    max-width:400px;
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-evenly;
    a{
      height: 35px;
      width: 45px;
      box-sizing: border-box;
      padding-left: 11px;
      margin: 0px 10px;
      display: flex;
      align-items: center;
      background-color: #261C2C;
      border-radius: 5px;
      box-shadow: -1px -1px 9px -2px rgba(0,0,0,1);
-webkit-box-shadow: -1px -1px 9px -2px rgba(0,0,0,1);
-moz-box-shadow: -1px -1px 9px -2px rgba(0,0,0,1);
    }
  }
`;

const Rooms= styled.div`
  height: fit-content;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 5px ;
  background: #6E85B2;;
  box-sizing: border-box;
  border-radius: 15px;
`;

const Chatroom = styled.div`
 
  height:140px;
  background: #261C2C;
  margin:0px;
  margin-bottom:2.5px;
  border-radius: 5px;
`;

const Pages = styled.div`

  margin:0px;
  margin-top:2.5px;
  height:140px;
  background: #261C2C;
  border-radius: 5px;
`;







export default LeftSection