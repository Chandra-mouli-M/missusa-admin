import React from "react";
import Top from "../../../components/Main Dashboard/index"
import Bottom from "../../../components/Main Dashboard/bottom"
import Winner from "../../../components/Main Dashboard/winner"
import{ Grid} from "@material-ui/core"

const data=[{"id":1,"name":"Jobina Ellicock","state":"Ganjiangtou","votes":214},
{"id":2,"name":"Tarra Antoniutti","state":"Kukës","votes":191},
{"id":3,"name":"Sharai Sacchetti","state":"Beiqiao","votes":174},
{"id":4,"name":"Egor Lorenzetto","state":"Taiyangling","votes":216},
{"id":5,"name":"Chariot Willbond","state":"Chitungwiza","votes":188}]


const data1=[{"id":5,"name":"Chariot Willbond","state":"Chitungwiza","votes":188}]

const tata={
 "heading":"Total subscriber",
  "count": 1234,
  "daily":10,
  "msg":"subscribers applying daily",
}

const tata1={
  "heading":"Total subscriber",
  "count": 1234,
  "daily":null,
  "msg":null,
}

interface Props {

  // Data:[];
}

const MainDashboad: React.FC = () => {

  return (<>
      <Top info={tata}></Top>
      <Top info={tata1}></Top>
      <Top info={tata1}></Top>
      
    <Grid
    container
    direction="row"
    justify="space-between"
    alignItems="flex-start"
    >
     <Grid item>
    <Grid
     container
     direction="column"
     justify="flex-start"
     alignItems="flex-start"
   > 
    <Grid  item>
    <Bottom Data={data}></Bottom>
    <Bottom Data={data}></Bottom>
    
    </Grid>
    </Grid>
    </Grid> 
  

  <Grid item>
    <Grid
     container
     spacing={2}
     direction="column"
     justify="flex-start"
     alignItems="flex-start"
   > 
   <Grid item xs={12}lg={12}>
   <Bottom Data={data1}/>
   <Winner />
   </Grid>
   </Grid>
   </Grid>
    

    </Grid>

   
   
  
 
    
</>
  );
};

export default MainDashboad;
