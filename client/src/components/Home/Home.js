import React,{useState,useEffect} from 'react'
import {Container,AppBar,Typography,Grow,Grid,Toolbar} from "@mui/material"
import Posts from "../Posts/Posts";
import {useDispatch} from 'react-redux';
import useStyles from './styles';
import {getPosts} from "../../actions/posts"
import Form from "../Form/Form";
const Home = () => {
    
const classes=useStyles();
            <Toolbar className={classes.toolbar}></Toolbar>
    const [currentId,setCurrentId]=useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch])
    return (
        <Grow in>
          <Container>
            <Grid container justify="space-between" className={classes.mainContainer} alignItems= "stretch" spacing="3">
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
          </Container>
        </Grow>
    )
}

export default Home
