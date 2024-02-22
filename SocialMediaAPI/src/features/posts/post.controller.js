
import PostModel from './post.model.js';

export default class PostController {

  async getAllPosts(req, res) {  
    
    try {
      const posts = await PostModel.getAllPost();
      res.status(200).send(posts);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async getPostById(req, res) {
    
    try {
      const postId = req.params.id;
      const post = await PostModel.getPostById(postId);
      if(!post){
          res.status(404).send('Post not found');
      }
      res.status(200).send(post);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
    
  }

  async getPostsByUser(req, res) {
    try {
      // Logic to fetch posts based on user credentials
      const userId = req.userId; 
      // console.log(userId);
      const userPosts = await PostModel.getPostByUser(userId);
      // console.log(userPosts);
      res.status(200).send(userPosts);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async createPost(req, res) {
    try {
      // Logic to create a new post
      const userId = req.userId;
      const { caption } = req.body;
      const newPost = {
          userId,
          caption,
          imageUrl: req.file.filename
      };
      const createdPost = await PostModel.createPost(newPost);
      res.status(201).send(createdPost);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async deletePost(req, res) {
    try {
      // Logic to delete a post
      const postId = req.params.id;
      const deletePost = await PostModel.deletePost(postId);
      console.log(deletePost);
      if (!deletePost) {
          return res.status(404).send("Post not found");
      }
      return res.status(200).send("Deleted Successfully!!!");
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async updatePost(req, res) {
    try {
      // Logic to update a post
      const postId = req.params.id;
      const { caption } = req.body;
      let imageUrl = req.file ? req.file.path : null;

      const updatedPost = await PostModel.updatePost(postId, caption, imageUrl);

      if (!updatedPost) {
          return res.status(404).send('Post not found');
      }

      res.status(200).send(updatedPost);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async getPostsByCaption(req, res) {
    try {
      const caption = req.params.caption;
      const filteredPosts = await PostModel.getPostsByCaption(caption);
      res.status(200).send(filteredPosts);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async saveAsDraft(req, res) {
    try {
      const postId = req.params.id;
      const savedPost = await PostModel.saveAsDraft(postId);
      res.status(200).send(savedPost);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  async archivePost(req, res) {
      try {
        const postId = req.params.id;
        const archivedPost = await PostModel.archivePost(postId);
        res.status(200).send(archivedPost);
      } catch (err) {
          console.log(err);
          return res.status(200).send("Something went wrong");
      }
  }

  async unarchivePost(req, res) {
      try {
        const postId = req.params.id;
        const unarchivedPost = await PostModel.unarchivePost(postId);
        res.status(200).send(unarchivedPost);
      } catch (err) {
          console.log(err);
          return res.status(200).send("Something went wrong");
      }
  }

  async sortByDate(req, res) {
    
    try {
      const sortedPosts = await PostModel.sortByDate();
      res.status(200).send(sortedPosts);
    } catch (err) {
        console.log(err);
        return res.status(200).send("Something went wrong");
    }
  }

  
}
