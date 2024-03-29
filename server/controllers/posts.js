import PostMessage from "../models/postMessage.js"
import mongoose from "mongoose";

export const getPosts =async (req,res)=>{
    try{
        const postMessages=await PostMessage.find();
        console.log(postMessages);

        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createPost=async (req,res)=>{
    const post=req.body;

    const newPost=new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(409).json({message:err.message});
    }
}


export const updatePost =async (req,res)=>{
    const {id:_id}=req.params;//renaming id to _id

    const post=req.body;
    //Checking wheather id is of type mongoose or newPost
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send("No post with that id ")

    const updatedPost= await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
    res.json(updatedPost);
}

export const deletePost =async(req,res)=>{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send("No post with that id exists")
    await PostMessage.findByIdAndRemove(_id);
    res.json({message:'post deleted successfully'});
}

export const likePost=async (req,res)=>{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        // console.log("Not mongoose type")
        return res.status(404).send("No post with that id exists");
    }
    // console.log("in server",_id);
    const post=await PostMessage.findById(_id);
    
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true})
    res.json(updatedPost);
}