import React from 'react'
import {Grid,CircularProgress} from '@mui/material'
import {useSelector} from 'react-redux';
import Post from "./Post/Post.js"
import useStyles from './styles';
const Posts = ({setCurrentId}) => {
    const classes=useStyles();
    const posts=useSelector((state)=>state.posts)
    
    console.log("Inside posts compoent",posts)
    return (
        !posts.length? <CircularProgress/>:(
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    
                    posts.map((post)=>{
                        console.log("Inside map compoent",post);
                        return(
                        <Grid key={post._id} item xs={12} sm={6}>
                        
                            <Post post={post} setCurrentId={setCurrentId}/>
                        </Grid>
                        );
                    })
                }
            </Grid>

        )
    )
}
//props drillings

export default Posts
