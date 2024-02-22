// comment.controller.js

import CommentModel from './comment.model.js';

export default class CommentController {
    async getAllCommentsForPost(req, res) {
        
        try {
            const postId = req.params.id;
            const postComments = await CommentModel.getAllCommentsForPost(postId);
            res.status(200).send(postComments);
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
    }

    async addCommentToPost(req, res) {
        try {
            const postId = req.params.postId;
            const userId = req.userId;
            const { content } = req.body;
            const comment = {
                userId,
                postId,
                content
            }
            console.log(postId);
            const newComment = await CommentModel.addCommentToPost(postId, comment);
            // comments.push(newComment);
            res.status(201).send(newComment);
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
    }

    async deleteComment(req, res) {
        try {
            const userId = req.userId;
            const commentId = req.params.id;
            const isDeleted = await CommentModel.deleteComment(commentId, userId);
            console.log(isDeleted);
            if (!isDeleted) {
                return res.status(404).send('Comment not found');
            } else {
                return res.status(200).send('Comment removed');
            }
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
        
    }

    async updateComment(req, res) {
        try {
            const commentId = req.params.id;
            const { content } = req.body;
            const updatedComment = await CommentModel.updateComment(commentId, content);
            console.log(updatedComment);
            if(!updatedComment){
                return res.status(404).send('Post not found');
            }else{
                return res.status(200).send(updatedComment);
            }
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
    }
}
