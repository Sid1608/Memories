import axios from "axios";

const url="http://localhost:5000/posts";

export const fetchPosts=()=> axios.get(url);
export const createPost=(newPost)=>axios.post(url,newPost)
export const updatePost=(id,updatedPost)=>axios.patch(`${url}/${id}`,updatedPost);
export const deletePost=(id)=>axios.delete(`${url}/${id}`);
export const likePost =(id)=>axios.patch(`${url}/${id}/likePost`);
/// all actions towards backend will be done using redux we need to dispathc those actions
// redux makes our application scalable means that as our application grows we can use same  old consit that redux offers withour any trouble.

