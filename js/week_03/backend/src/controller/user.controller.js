import { User } from "../model/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async(req, res) => {
   const {username, email, password} = req.body
   
   if(
    [username, email, password].some((filed) => filed?.trim() === ""))
    {
        throw new ApiError(400, "All fields are required")
   }

   const existedUser = await User.findOne({
    $or: [{username}, {email}]
   })

   if(existedUser){
    throw new ApiError(400, "user with email or password is already exist")
   }

   try {
    const user = await User.create({
        username: username.toLowerCase(),
        email,
        password
    })

    

    const createUser = await User.findById(user._id).select("-password -refreshToken")
    return res.status(200).json(new ApiResponse(201, createUser,"User registered successfully"))
   } catch (error) {
        console.log('some thing went wrong while registering user', error);
        throw new ApiError(500, "Some thing went wrong while registering user")
   }

})

export {registerUser}