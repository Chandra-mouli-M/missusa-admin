import React, {useState} from "react"
import styled from "styled-components"


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Avatar from "@material-ui/core/Avatar"

interface Props{
 Data:{
   id: number,
   name: string 
   state: string,
   votes: number;
 }[]
 
 
}

const Bottom =(props: Props)=>{

  const{Data}=props
  

  


 



    return(<>
        <Cover>
    
            <Left>
            <Container >
      <Table  style={{borderSpacing: '0px 4px',width: '420px'}} size="small" >
        
        <TableHead>
         <h3>lsdl</h3>
         
          <TableRow  >
              
            <TableCell style={{fontSize:"10px",borderBottom:"hidden"}} align='left'>Contestant Name</TableCell>
            <TableCell style={{fontSize:"10px",borderBottom:"hidden"}}align="center">State</TableCell>
            <TableCell style={{fontSize:"10px",borderBottom:"hidden"}}align="center">Votes</TableCell>
           
            
           
          </TableRow>
        </TableHead>
        <TableBody  >
         {console.log(Data)}
         {Data.map((item)=>

            <Row key={item.id} style={{}}>
              
              <TableCell style={{fontSize:"10px",borderBottom:"hidden"}} align="left"><Div><Photo/>{item.name}</Div></TableCell>
              <TableCell style={{fontSize:"10px",borderBottom:"hidden"}} align="center">{item.state}</TableCell>
              <TableCell style={{fontSize:"10px",borderBottom:"hidden"}} align="center">{item.votes}</TableCell>
              
             
            </Row>)}
            
            
        
        </TableBody>
      </Table>
    </Container>
                </Left>
           
    
        </Cover>

            
        
        </>
    )
}

export default Bottom

//styled


const Left=styled.div`
padding:1em;
margin:5px;
font: #E1B2AC;
border-radius:5px;
box-shadow:0 0 10px 0 rgba(225, 178, 172, 0.2);
max-width:450px;
max-height:250px;

`;


const Container=styled(TableContainer)`
&&{
  box-shadow:0 0 0 0 ;
  display:flex;
  max-height:150px;
  overflow:auto;
  margin:0 0 5px 0;
 
  
}
`;

const Row=styled(TableRow)`

&&{
box-shadow:0 0 1px 0 rgba(225, 178, 172, 0.2);


}
  &:hover{
    background-color:rgba(225, 178, 172, 0.8);
   
    box-shadow: rgba(225, 178, 172, 0.8);
    margin: -2px;
  }
  
`;


const Photo=styled(Avatar)`
 &&{
   height: 20px;
   width:20px;
   display:flex;
   margin-right:10px;

 }
`;
const Div=styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
`;

const Cover=styled.div`
/*border:1px solid;*/

margin:10px 10px;
margin-bottom:0px;


`;