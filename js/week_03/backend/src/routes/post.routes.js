import { Router } from "express";
import { createPost, getAllBlogs } from "../controller/post.controllers.js";
import { verifyJwt } from "../middleware/auth.middleware.js";

const router = Router()

router.route("/post").post(verifyJwt, createPost)
router.route("/all-blogs").get(verifyJwt, getAllBlogs)

export default router