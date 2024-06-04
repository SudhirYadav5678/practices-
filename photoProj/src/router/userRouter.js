import { Router } from "express";
import {upload} from "../middleware/multer.js"
import { registerUser, loginUser,
    logoutUser, 
    refreshAccessToken,
    changeCurrentPassword,
 } from "../services/userRegister.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser
    )
router.route("login")
router.route("/login").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)
//router.route("/change-password").post(verifyJWT, changeCurrentPassword)
export default router