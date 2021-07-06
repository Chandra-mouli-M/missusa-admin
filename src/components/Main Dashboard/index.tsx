import React from "react"
import styled from "styled-components"


export const Box=styled.div`

padding:1em;

margin:5px ;
font: black;
border-radius:5px;



box-shadow:0 0 10px 0 rgba(225, 178, 172, 0.2);

`;
export const Cover=styled.div`
/*border:1px solid;*/

margin:0px 10px;
margin-bottom:0px;
display:inline-block;
width:31.2%;

`;
const Head=styled.h1`
color:#E1B2AC;
font-size:20px;
margin:5px ;
margin-bottom:0;
margin-top:0;
display:flex;
align-items:center;



`;
const Span=styled.span`

color:red;


`;

const Icon=styled.div`
background:white;
margin:0 0 0 150px;
height:50px;
width:50Px;
border-radius:50%;
box-shadow:0 0 10px 3px rgba(225, 178, 172, 0.2);
align:center;

`;

const Info=styled.p`
font-size:12px;
`;

interface Props{
  info:{
  heading: string,
  count: number,
  daily:null|number,
  msg:null|string;
  
  }
}

 
 
 


 const Top=(props:Props)=>{
   const {info}= props
return(
<Cover>
  <Box>

<Info>{info.heading}</Info>

<Head>{info.count }+<Icon></Icon></Head>

<Info><Span>{info.daily}{info.daily!== null ? "+" : <Span style={{color:"white"}}>{"not"}</Span>}</Span>{info.msg}</Info>
  </Box>

</Cover>
)
}

export default Top


