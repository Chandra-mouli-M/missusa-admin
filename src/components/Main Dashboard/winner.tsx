import React from "react"

import styled from "styled-components"
import AccountBg from "../../assets/images/AccountBg.png";

const Winner=()=>{
    return(
        <Wrap>
         <Img />
            <Info>
                 <Data>
                        <p >MS.</p>
                        <h2>Selena Lindsay</h2>
                        <h5>winner </h5>
                        <h5>of </h5>
                        <h2>2020</h2>
                        <h3>Miss USA</h3>
                    </Data>
            </Info>
        </Wrap>
       
      
       
    )
}

export default Winner


const Img=styled.div`
background:url(${AccountBg});
background-size: cover;
background-position: center;
opacity:0.8;
width:180px;
height:220px;
margin:10px;
z-index:1;
border-radius:5px;
position:relative;


`;
const Info=styled.div`
border:1.5px solid white;
width:210px;
height:200px;
margin:20px ;
scale:10%;
margin-left:-20px;
border-image-slice: 1;
border-image-source:linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,0.1));
border-radius:10px;



`;

const Wrap=styled.div`

display:flex;
border-radius:5px;
width:450px;
height:240px;
padding:1 em;
background-color:#E1B2AC;
box-shadow:0 0 10px 0 rgba(225, 178, 172, 0.2);
align:center;
margin:10px 0 0 10px ;





`;

const Data=styled.div`
/*border:1px solid;*/
margin:20px 0 0px 10px ;
height:160px;
color:White;
align-items:center;
p{
    font-size:10px;
    transform:scale(1,1.5);
    font-weight:20;
}
h2{
    font-size:21px;
    font-weight:20;
    margin:8px;
    text-align:center;
    transform:scale(1,1.5);
    
   
}

h3{
    
    font-weight:20;
   
    text-align:center;
    transform:scale(1,1.5);
}
h5{
    font-size:10px;
    font-weight:20;
   margin:5px;
    text-align:center;
    transform:scale(1,1.5);
}


}

`;
