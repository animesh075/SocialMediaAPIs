import { ApplicationError } from "../../error-handler/applicationError.js";


export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
        this.content = content;
    }

    static getAllCommentsForPost(postId) {
        try {
            const postComments = comments.filter(comment => comment.postId == postId);
            return postComments;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static addCommentToPost(postId, newComment) {
        try {
            // const newComment = new CommentModel(userId, postId, content);
            const postComments = comments.findIndex(comment => comment.postId == postId);
            console.log(postComments);
            console.log(postId);
            
            if(!postComments){
                // return 'No post Found to comment';
                newComment.id=`C_${comments.length + 1}`;
                comments.push(newComment);
                return newComment;
                        
            } else {
                return null; 
            }
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
        
    }

    static deleteComment(commentId, userId) {
        
        try {
            const index = comments.findIndex(comment => comment.id == commentId && comment.userId==userId);
            console.log(index);
            if (index == -1) {
                // return 'Comments not Found'
                return null;
            } else{
                comments.splice(index, 1);
                return 'Comments deleted successfully!!!';
            }
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    // static updateComment(commentId, content) {
    //     const index = comments.findIndex(comment => comment.id == commentId);
    //     if (index != -1) {
    //         comments.content = content;
    //         return index;
    //     } else {
    //         return null;
    //     }
    // }
    static updateComment(commentId, content) {
        
        try {
            const index = comments.findIndex(comment => comment.id === commentId);
            if (index !== -1) {
                comments[index].content = content;
                return(comments[index]);
            } else {
                return null;
            }
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }
}

var comments = [
    new CommentModel(
        'C_1',
        'U_1',
        'P_1',
        'First comment on the post'

    )
]
