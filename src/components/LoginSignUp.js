import React from 'react';
import { Typography } from '@material-ui/core';
import { TextField, Card, Button } from '@material-ui/core';


const styles={
    textfield:{
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        minWidth:250
    },
    button:{
        marginTop:20,
        marginBottom:10,
        width:'40%',
        alignSelf:'center'
    },
    container:{
    },
    content:{
        display:'flex',
        flexDirection:'column',
    },
    contentWithPadding:{
        display:'flex',
        flexDirection:'column',
        padding:20
    }
};

const Login = (props)=>{
    return (
        <Card style={{...styles.container,...props.style}}>
            <div style={styles.content}>
                <div style={styles.contentWithPadding}>
                <Typography
                    variant={"h5"}
                    color="primary"
                    align={'center'}
                    gutterBottom>
                    Login
                </Typography>
                <TextField 
                    label={"Username"} 
                    autoFocus          
                    style={styles.textfield} />
                <TextField 
                    label={"Password"} 
                    type={"password"}  
                    style={styles.textfield} />
                <Button 
                    variant={"contained"} 
                    color={"primary"}
                    style={styles.button}>
                        Login
                </Button>
                <Typography
                    align={'center'}
                    gutterBottom>
                    Forgot Password?
                </Typography>
                </div>
                <Button
                    color="primary"
                    variant={'contained'}
                    onClick={()=>props.handleChange()}
                    style={{alignSelf:'flex-end',marginRight:-10}}>
                    Sign up
                </Button>
            </div>
        </Card>
    )
}

const SignUp = (props)=>{
    return (
        <Card style={{...styles.container,...props.style}}>
            <div style={styles.content}>
                <div style={styles.contentWithPadding}>
                <Typography
                    variant={"h5"}
                    color="primary"
                    align={'center'}
                    gutterBottom>
                    Sign Up
                </Typography>
                <TextField 
                    label={"Username"} 
                    autoFocus          
                    style={styles.textfield} />
                <TextField 
                    label={"Mobile"} 
                    type={"number"}             
                    style={styles.textfield} />
                <TextField 
                    label={"Password"} 
                    type={"password"}  
                    style={styles.textfield} />
                <TextField 
                    label={"Retype Password"} 
                    type={"password"}  
                    style={styles.textfield} />
                <Button 
                    variant={"contained"} 
                    color={"primary"}
                    style={styles.button}>
                        SignUp
                </Button>
                
                </div>
                <Button
                    color="primary"
                    variant={'contained'}
                    onClick={()=>props.handleChange()}
                    style={{alignSelf:'flex-end',marginRight:-10}}>
                    Login
                </Button>
            </div>
        </Card>
    )
}

export {Login,SignUp};