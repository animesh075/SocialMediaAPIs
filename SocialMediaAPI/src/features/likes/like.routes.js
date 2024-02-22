import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.get("/:postId", likeController.getAllLikesForPost);
likeRouter.get("/toggle/:postId", likeController.toggleLikeForPost);
likeRouter.get("/sort/likes",likeController.sortByLikes);

export default likeRouter;
