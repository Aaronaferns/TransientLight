import {React} from 'react'
import styled from 'styled-components'
import axios from "axios";



const CreatePost = () => {
    const token ='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhYXJvbkBnbWFpbC5jb20iLCJpYXQiOjE2NzQ1NDAxMjAsImV4cCI6MTY3NDU0MTU2MH0.OVXKF0OaOuBFfG8XshLg8O-V37hnyoAfBLu-no83A6A';
    const Transient_Light_Endpoint = "http://localhost:8000/api/v1/demo-controller";

    const handleClick = () =>{
        axios.get(Transient_Light_Endpoint,
             { 
                headers:{
                 
                  'Access-Control-Allow-Origin': '*',
                  Authorization: `Bearer ${token}`,
                  Accept: "application/json",
                 
                }
             })
             .then(
                 (response)=>{
                    console.log(response.data);
                 }
             )
             .catch((error) => {
              console.log(error.response.data);
            });
    }

  return (
    <div className="createPost">
             <Prompt>Prompt/</Prompt>
            <PromptInput type="text"></PromptInput>
            <Submit onClick={handleClick}></Submit>
    </div>
  )
}
const Prompt = styled.div`
  background: black;
  margin-right:10px;
  color:white;
  width: 90px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const PromptInput = styled.input`
  line-height: 1.75;
  outline: none;
  border:none;
  flex: 8 0 300px;
`;
const Submit = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;
export default CreatePost