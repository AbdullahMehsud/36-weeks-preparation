import { Blog } from "../model/blog.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createPost = asyncHandler(async(req, res) => {
    const {title, content} = req.body

    if([title, content].some((filed) => filed?.trim() === "")){
        throw ApiError(400, "All fields are required")
    }
    const userId = req.user._id
    try {
        const post = await Blog.create({title, content, authoer: userId})
        if(!post){
            throw new ApiError(401, "something went wrong while posting blog")
        }

        return res.status(200).json(new ApiResponse(201, post, "blog posted successfully"))
    } catch (error) {
        console.log("something went wrong while posting blog", error);
        throw new ApiError(500, "something went wrong while posting blog")
    }
})

const getAllBlogs = asyncHandler(async(req, res) => {
    try {
        const allBlogs = await Blog.find().populate("authoer", 'username')
        if(!allBlogs){
            throw new ApiError(404, "No blog are found")
        }
    
        return res.status(200).json(new ApiResponse(201, allBlogs, "all blog fetched succesfully"))
    } catch (error) {
        console.log("something went wrong while fetching all blogs", error);
        throw new ApiError(500, 'something went wrong while fetching all blogs')
        
    }
})
export { createPost, getAllBlogs}