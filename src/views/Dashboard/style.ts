import styled from "styled-components";
import { Grid } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";
import Avatar from '@material-ui/core/Avatar';


export const MainContainer = styled(Grid)`
  background: #e1b2ac;
  height: 100vh;
  overflow:hidden;
  
`;

export const SideMenu = styled(Grid)`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  align-items: center;
  && {
    margin: 2% auto;
   
  }
`;

export const Logo = styled.div`
  /* border: 1px solid red; */
  align-self: center;
  img {
    max-width: 170px;
    max-height: 100px;
  }
`;

export const NavItems = styled.div`
  /* border: 1px solid black; */
  flex: 1;
  margin-top: 40px;
 

`;

export const LogoutSec = styled.div`
  margin-bottom: 20px;
  color: white;
`;

export const MainContent = styled(Grid)`
  border: 10px solid #e1b2ac;
  border-left: none;
  background: white;
  border-radius: 25px;

  && {
    padding: 20px;
  }
`;

export const AppHeader = styled(Grid)`

  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-top:0px;
`;

export const AppMain = styled(Grid)`
  /* border: 1px solid black; */
`;

export const Search=styled(SearchBar)`

&&{
border-radius: 40px;
height:30px;
align:center;
box-shadow: 0 0 0 0 ;
background-color:#F5F5F5;


}
  & ::-webkit-input-placeholder { 
        font-family: "Times New Roman", Times, serif;
        
      };
   

  `;
  export const Cover=styled.div`
  /*border: 1px solid black;*/
  display:flex;
  justify-content:flex-start;
  align-items:center;
  
 
  `;

  export const AdminProfile=styled.div`
  background:#E1B2AC;
  height:20px;
  width:150px;
  border-radius:25px;
  text-align:center;
  color: white;
  padding:5px 10px 5px 0;
  display:inline;
 
 margin-right:-20px;
   

  `;

  export const Profile=styled(Avatar)`
  border: 3px solid #E1B2AC;
  &&{
 align:center;
  position:relative;
  }
  `;


  export const Set=styled.li`
  margin:0px 10px;
  background:red;
  height:20px;
  width:250px;
  z-index:1;
  position:relative;
  
display:block;


 
  

  `;

  



  