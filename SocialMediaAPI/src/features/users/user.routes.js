import express from 'express';
import UserController from './user.controller.js';

const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signUp);
userRouter.post("/signin", userController.signIn);
userRouter.put("/:userId/bookmark/:postId", userController.addBookmark);
userRouter.delete("/:userId/bookmark/:postId", userController.removeBookmark);

export default userRouter;