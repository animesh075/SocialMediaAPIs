import express from 'express';
import PostController from './post.controller.js';
import { upload } from '../../middlewares/fileUpload.middleware.js';

const postRouter=express.Router();
const postController = new PostController();

postRouter.get("/all", postController.getAllPosts);
postRouter.get("/:id", postController.getPostById);
postRouter.get("/", postController.getPostsByUser);
postRouter.post("/", upload.single('imageUrl'), postController.createPost);
postRouter.put("/:id", upload.single('imageUrl'), postController.updatePost);
postRouter.delete("/:id", postController.deletePost);
postRouter.get("/filter/:caption", postController.getPostsByCaption);
postRouter.put("/draft/:id", postController.saveAsDraft);
postRouter.put("/archive/:id", postController.archivePost);
postRouter.put("/unarchive/:id", postController.unarchivePost);
postRouter.get("/sort/date", postController.sortByDate);
// postRouter.get("/sort/likes", postController.sortByLikes);

export default postRouter;
