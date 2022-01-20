import * as api from "../api";
import {FETCH_ALL,CREATE,UPDATE,DELETE,LIKE} from "../constants/actionTypes"
/// Action Creators : function that return action
//payload -data where we store all our posts
export const getPosts=()=> async(dispatch)=>{

    try{

        const {data}= await api.fetchPosts();
        dispatch({type:FETCH_ALL,payload:data});
    }catch(err){
        console.log(err.message);
    }



    // const action={type:'FETCH_ALL',payload:[]}

    // dispatch(action);
}
export const createPost=(post)=> async(dispatch)=>{

    try{
        const {data}= await api.createPost(post);
        dispatch({type:CREATE,payload:data});
    }catch(err){
        console.log(err.message);
    }

}

export const updatePost = (id,post)=>async(dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post);
        dispatch({type: UPDATE, payload: data});
    }catch(error){
        console.log(error)
    }
}

export const deletePost=(id)=>async (dispatch)=>{
    try{
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id});
    }catch(error){
        console.log(error)
    }
}

export const likePost=(id)=>async (dispatch)=>{
    try{
        // console.log("inside action",id);
        const {data}=await api.likePost(id);
        dispatch({type:UPDATE,payload:data})

    }catch(error){
        console.log(error)
    }
}