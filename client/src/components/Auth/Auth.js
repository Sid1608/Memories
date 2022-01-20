import React,{useState} from 'react'
import {AppBar,Paper,Grid,Container,Typography,Button,Toolbar,Avatar} from "@mui/material"
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useStyles from './styles';
import Input from "./Input"
const Auth = () => {

    const classes = useStyles();
    const [showPassword,setShowPassword]=useState(false);
    const isSignup=true;
    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword);
    const handleSubmit =()=>{

    };
    const handleChange=()=>{

    }
    const switchMode =()=>{

    }
    return (
        <Container component="main" maWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">
                    {isSignup?'Sign Up':'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                     {
                         isSignup && (
                             <>
                             
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="firstName" label="First Name" handleChange={handleChange}  half/>
                           
                             </>
                         )
                     }
                     <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                     <Input name="password" label="Password" handleChange={handleChange} type={showPassword?'text':'password'} handleShowPassword={handleShowPassword}/>
                      {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup?"Sign Up":"Sign In"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup?"Already have an account? Sign In":"Don't Have An Account?Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
