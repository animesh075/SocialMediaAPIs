import { ApplicationError } from "../../error-handler/applicationError.js";


export default class PostModel{
    constructor(id, userId, caption, imageUrl, isDraft, isArchived){
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageUrl = imageUrl;
        this.isDraft = isDraft || false;
        this.isArchived = isArchived || false;
    }

    static getAllPost(){
        try {
            return posts;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static getPostById(postId){
        
        try {
            return posts.find(p=> p.id == postId);
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }
    
    static getPostByUser(userId) {
        
        try {
            return posts.filter(post => post.userId == userId);
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static createPost(post){
        
        try {
            // const newPost = new PostModel(userId, caption, imageUrl);
            post.id = `P_${posts.length + 1}`;
            // console.log(newPost);
            posts.push(post);
            return post;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }
    
    static updatePost(postId, caption, imageUrl){
        
        try {
            const index = posts.findIndex(post => post.id == postId);
            if (index !== -1) {
                posts[index].caption = caption;
                posts[index].imageUrl = imageUrl;
                return posts[index];
            }
            return null;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static deletePost(postId){
            
        try {
            const index = posts.findIndex(post => post.id == postId);
            console.log(index);
            if (index === -1) {
                return 'Post not found';
                // return null; // Indicate that post was not found
            }
            posts.splice(index, 1);
            return 'Post deleted successfully!!!';
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static getPostsByCaption(caption) {
        try {
            return posts.filter(post => post.caption.includes(caption));
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static saveAsDraft(postId) {
        
        try {
            const index = posts.findIndex(post => post.id == postId);
            if (index !== -1) {
                posts[index].isDraft = true;
                // posts[index].imageUrl = imageUrl;
                return posts[index];
            }
            return null;
            // post.isDraft = true;
            // return post;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static archivePost(postId) {
        try {
            const post = posts.find(p => p.id == postId);
            if (post) {
                post.isArchived = true;
                return post;
            }
            return null;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static unarchivePost(postId) {
        try {
            const post = posts.find(p => p.id == postId);
            if (post) {
                post.isArchived = false;
                return post;
            }
            return null;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static sortByDate() {
        
        try {
            return posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }
    
    
}

var posts = [
    new PostModel(
        'P_1',
        'U_1',
        'This is my first Post',
        'pic.png'
    )
]