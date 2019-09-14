import React from 'react';
import logo from './../images/thumb-up-thumb-down.jpg';
import AuthCard from './AuthCard';
import { Typography } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const styles={
    container:{
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column',
      background:'linear-gradient(to right bottom, #430089, #82ffa1)',//#e66465, #9198e5
      justifyContent:'center',
      alignItems:'center',
      alignContent:'center'
    }
}

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#e66465'
    },
    secondary:{
      main:'#82ffa1'
    }
  }
})

export default (props)=>{

    return(
        <MuiThemeProvider theme={theme}> 
          <div style={styles.container} >
          <Typography variant="h4" display="block" align="center" style={{color:'white',marginBottom:40}}>
                Character Voting Application
          </Typography>
          {/* <img src={logo} alt="logo" height="70" width="100" style={{alignSelf:'center',marginTop:40}}/> */}
          <AuthCard style={{marginTop:20}}/>
          {/* <Button onClick={()=>handleChange()}>Check</Button> */}
        </div>
      </MuiThemeProvider>
    )
}
