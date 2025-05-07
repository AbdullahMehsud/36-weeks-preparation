import { User } from "../model/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { loginUserSchema, regiserUserSchema } from "../validators/authValidator.js"

const generateRefreshAndAccessToken =  async(userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = await user.generateAccessToken()
        const refreshToken = await user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {refreshToken, accessToken}
    } catch (error) {
        throw new ApiError(500, "something went wrong while generating access and refresh token")
    }
}

const registerUser = asyncHandler( async(req, res) => {
   try {
    const validateData = regiserUserSchema.parse(req.body)
    const user = await User.create(validateData)

    

    const createUser = await User.findById(user._id).select("-password -refreshToken")
    return res.status(200).json(new ApiResponse(201, createUser,"User registered successfully"))
   } catch (error) {
        console.log('some thing went wrong while registering user', error);
        throw new ApiError(500, "Some thing went wrong while registering user")
   }
})

const loginUser = asyncHandler(async( req, res) => {
    const {username, password} = loginUserSchema.parse(req.body)

    const user = await User.findOne({
        username: username
    })

    if(!user) {
        throw new ApiError(401, "Invalid username")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Password is incorrect")
    }

    const {refreshToken, accessToken} = await generateRefreshAndAccessToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    if(!loggedInUser){
        throw new ApiError(401, "User is not logged in")
    }

    const options = {
        httpOnly: true
    }

    return res.status(200)
              .cookie("accessToken" , accessToken, options)
              .cookie("refreshToken", refreshToken, options)
              .json(new ApiResponse(200, {user: loggedInUser, accessToken, refreshToken}, "user logged in succesfully"))
})


const logoutUser = asyncHandler( async(req, res) => {
    const userId = req.user?._id


    await User.findByIdAndUpdate(
         userId,
         {
            $set: {
                refreshToken: null
            }
         },
         {
            new: true
         }
        )
        const options = {
            httpOnly: true
        }

        return res.status(200)
                  .clearCookie("refreshToken", options)
                  .clearCookie("accessToken", options)
                  .json(new ApiResponse(201, {}, "User logged out successfully"))
})
export {registerUser, loginUser, logoutUser}