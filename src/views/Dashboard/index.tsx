import React,{useState}  from "react";
import { Grid } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import RouteMapper from "../../router/RouteMapper";
import NavigationRouter from "../../router/NavigationRouter";
import { DashboardRoutes } from "./routes";
import { CommonRoute } from "../../config/routes";
import logo from "../../assets/svg/Logo.svg";
import logout from "../../assets/svg/Icon_Logout.svg";
import { SvgIcon } from "../../router/NavigationRouter";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton } from "@material-ui/core";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {
  MainContainer,
  SideMenu,
  MainContent,
  AppHeader,
  AppMain,
  Logo,
  NavItems,
  LogoutSec,
  Search,
  AdminProfile,
  Cover,
  Profile,
 

} from "./style";

interface Props {}









const Dashboard: React.FC = (props: Props) => {
  const history = useHistory();
 



  const [anchorEl, setAnchorEl] = useState(null)


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    history.push(CommonRoute.home);
  };
  return (<>
    <MainContainer container>
      <SideMenu item lg={2} md={2} sm={12} xs={12}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavItems>
          <NavigationRouter data={DashboardRoutes} />
        </NavItems>
        <LogoutSec onClick={handleLogout}>
          <SvgIcon src={logout} alt="icon" />
          <span>Log Out</span>
        </LogoutSec>
      </SideMenu>
      <MainContent item lg={10} md={10} sm={12} xs={12}>
        <Grid container>
          <AppHeader item xs={12}>
            
            <Search
          
               
        >  </Search>
       
       

       
          <Cover>
           <AdminProfile>admin profile</AdminProfile>
           <Profile />
           <IconButton onClick={(event:any) => {setAnchorEl(event.currentTarget)}} aria-label="delete">
           <ExpandMoreIcon style={{color:"#e1b2ac"}}/>
            </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem style={{fontSize:"12px"}}onClick={handleClose}>Profile</MenuItem>
        <MenuItem style={{fontSize:"12px"}}onClick={handleClose}>My account</MenuItem>
        <MenuItem style={{fontSize:"12px"}}onClick={handleClose}>Logout</MenuItem>
      </Menu>
    

           </Cover>
         
          </AppHeader>
          
          <AppMain item xs={12}>
            <RouteMapper data={DashboardRoutes} />
          </AppMain>
         
        </Grid>
       
      </MainContent>
    </MainContainer>
    </>
  );
};

export default Dashboard;
