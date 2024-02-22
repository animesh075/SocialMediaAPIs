
import LikeModel from "./like.model.js";

export default class LikeController {
    async getAllLikesForPost(req, res) {
        try {
            const postId = req.params.postId;
            console.log(postId);
            const postLikes = await LikeModel.getAllLikesForPost(postId);
            console.log(postLikes);
            return res.status(200).send(postLikes);
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
    }

    async toggleLikeForPost(req, res) {
        try {
            const postId = req.params.postId;
            const userId = req.userId;
            const likeData = {
                userId,
                postId
            };
            console.log(likeData);
            const toggleLike = await LikeModel.toggleLikeForPost(likeData);
            console.log(toggleLike);
            res.status(201).send(toggleLike);
          } catch (err) {
              console.log(err);
              return res.status(200).send("Something went wrong");
          }
    }

    async sortByLikes(req, res) {
        try {
          const sortedPosts = await LikeModel.sortByLikes();
          res.status(200).send(sortedPosts);
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }
}
