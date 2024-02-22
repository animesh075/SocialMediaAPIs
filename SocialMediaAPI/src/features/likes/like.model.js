import { ApplicationError } from "../../error-handler/applicationError.js";

// like.model.js
export default class LikeModel {
    constructor(id, userId, postId) {
        this.id = id;
        this.userId = userId;
        this.postId = postId;
    }
  
    static getAllLikesForPost(postId) {
        
        try {
            const postLikes = likes.filter(like => like.postId == postId);
            console.log(postLikes);
            return postLikes;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    } 
  
    static toggleLikeForPost(likeData) {
        
        try {
            const existingLikeIndex = likes.findIndex(like => like.userId == likeData.userId && like.postId == likeData.postId);
            console.log(existingLikeIndex)
            if (existingLikeIndex !== -1) {
                likes.splice(existingLikeIndex, 1); // Remove like if already exists
                return 'Like removed successfully';
            } else {
                const newLike = new LikeModel(`L_${likes.length + 1}`, likeData.userId, likeData.postId);
                likes.push(newLike); // Add new like
                console.log(newLike);
                return newLike;
            }
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static sortByLikes() {
        
        try {
            return likes.sort((a, b) => b.likes.length - a.likes.length);
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }
  }
  
  var likes = [
    new LikeModel(
        'L_1',
        'U_1',
        'P_1',
    )
  ]
  