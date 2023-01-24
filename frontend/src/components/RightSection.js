import "../styles/RightSection.css"
import styled from 'styled-components'
import Post from "./Post"
import CreatePost from "./CreatePost";
const RightSection = () => {
  return (
    <div className="rightSection">
      
        <CreatePost/>
      
        <Gallery>
          <Feed>

          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/564x/08/fc/8c/08fc8c3537fc46abb0bed5ad8f408fd8.jpg"} message={"Angel in armor"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          </Feed>
          <Favourites>

          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/564x/08/fc/8c/08fc8c3537fc46abb0bed5ad8f408fd8.jpg"} message={"Angel in armor"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          <Post url={"https://i.pinimg.com/750x/ed/cf/4a/edcf4af6e4d544b2a79f84510aa9d950.jpg"} message={"Color harmony"}/>
          <Post url={"https://i.pinimg.com/564x/2b/bd/d5/2bbdd5a17531c2d45e40dec44e9bc810.jpg"} message={"This is AI art"}/>
          </Favourites>
          
          
        </Gallery>
        
    </div>
  )
}


const Gallery = styled.div`
  width:100%;
  background: transparent;
  border-radius: 10px;
  flex: 8 2 400px;
  display: flex;
  flex-direction: row;
  
`;

const Feed = styled.div`
  width:50%;
  padding:10px;
  border: 2px solid black;
  margin:2px;
  background: white;
  border-radius:10px;
`;
const Favourites = styled.div`
  width:50%;
  padding: 10px;
  border: 2px solid black;
  margin:2px;
  background: white;
  border-radius:10px;
`;

export default RightSection