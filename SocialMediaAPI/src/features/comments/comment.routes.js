import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter=express.Router();
const commentController = new CommentController();

commentRouter.get("/:id", commentController.getAllCommentsForPost);
commentRouter.post("/:postId", commentController.addCommentToPost);
commentRouter.put("/:id", commentController.updateComment);
commentRouter.delete("/:id", commentController.deleteComment);

export default commentRouter;
