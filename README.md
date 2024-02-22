# SocialMediaAPIs

Objective

You're working for an innovative tech startup with a vision to create a social networking platform. This platform should enable users to create posts with text and media and support user engagement with likes and comments. Your task is to develop the API for this application using the Express-Node framework.

Goal

Develop a social media application with a user friendly interface to register and authenticate users, create a post, and to like and comment on that post.

Acceptance criteria

1.Create a scalable architecture with ExpressJS that separates data management, application logic and routing control.

2. Utilize ES6 Modules to maintain code modularity and organization.

3. Use in-memory data structures for post, like, comment and user management operations.

4. Create a login and registration system, allowing users to register and log into their accounts.

5. Allow users to create a post, view all posts, view details of a specific post, like and remove the like from a post and comment on a post.

6. The users should be able to update and delete the posts and comments, view profile posts, and get all likes and comments on a specific post.

7. Create a custom error class that sets the status code and error message and use an error handler middleware to send custom error messages.

8. Use json Web Tokens to create, verify and manage authentication tokens and to secure all the application routes, excluding the user routes.

9. Implement a file upload middleware to store and manage post media.

10. Use a logger middleware to log request URL and body for all routes, excluding the user routes.

11. Ensure original and high-quality code with comprehensive documentation.

Tasks

1. Set up an Express.js application and its related configurations.

2. Install necessary project dependencies based on the functionalities required.

3. Create a User model with functions for getting all the users, adding a user, and confirming user login.

4. Create a User controller to interface with the User model and handle user registration and login. 4

5. Create a Post model with functions for creating a new post, retrieving all posts, retrieving user posts, getting a post by its id, updating a post and deleting a post.

6. Create a Post controller to interface with the Post model to retrieve, create, update and delete posts.

7. Create a Comment model with functions for creating a comment, getting all comments on a specific post, updating and deleting a comment.

8. Create a Comment controller to interface with the Comment model to retrieve, create, update and delete comments on a specific post.

9. Create a Like model with functions for adding and removing a like and to get all likes on a specific post.

10. Create a Like controller to interface with the Like model to retrieve and toggle likes on a specific post.

11. Create a custom error class and an error handling middleware to send custom error messages.

12. Create a file upload middleware to handle post media.

13. Create a token based middleware for user authentication and to secure all the application routes.

14. Create a logger middleware to log request URL and body for all routes, excluding the user routes

15. Document the application explaining functionalities, dependencies, and code organization for easy understanding of the codebase.

Additional Tasks

You can add the following functionality to the project to maximize your score:

1. Add a feature to allow users to filter posts based on the posts caption.

2. Add a feature to save a post as a draft and to archive a post.

3. Implement sorting of posts based on user engagement and date.

4. Add a feature to bookmark a post.

5. Implement pagination for posts and comments.

Hints

1. Data Structures:

User

-id: Unique identifier for each user.

- name: Name of the user.

- email: Email address of the user.
- password: Password for user authentication.

The User data structure is used to store information about users, including their identification details such as name, email, and password.

Post

⚫ Id: Unique identifier for each post.

⚫ userid: Identifier for the user who created the post.

⚫ caption: The text content of the post.

⚫ imageUrl: The URL of the image attached to the post.

The Post data structure is used to store information about the posts shared by users. It includes attributes such as the user ID of the poster, the caption of the post, and the URL of any attached image.

comment

⚫ id: Unique identifier for each comment.

⚫ userld: Identifier for the user who commented.

⚫ postid: Identifier for the post that was commented on.

⚫ content: The text content of the comment.

The Comment data structure is used to store comments made on posts. It includes attributes such as user ID of the commenter, post ID of the commented post, and the text content of the comment

Like

⚫ id: Unique identifier for each like.

⚫ userld: Identifier for the user who liked the post.

⚫ postid: Identifier for the post that was liked.
The Like data structure is used to keep track of likes on posts. It includes attributes such as user ID of the liker and post ID of the liked post.

2. Additional info for reference:

Token based Authentication: This can be achieved by associating each request with the user's ID that is extracted from the token. The user ID is then used to check for necessary permissions before allowing any modifications. Learn more: link

Pagination: Instead of displaying all posts and comments on a single page, divide them into smaller pages and provide navigation to move between pages. This helps t load and display data more efficiently.

REST API Best Practices: Follow REST API best practices to design your API endpoints. Use appropriate HTTP methods (GET, POST, PUT, DELETE) for different types of operations. Learn more: link

API Structure:

The API structure for the "Postaway" social media project can be organized as follows:

User routes

/api

• POST/signup: Register a new user account

• POST/signin: Log in as a user

Post routes

/api/posts

• GET /all: Retrieve all posts

• GET/id: Retrieve a specific post by ID

• GET /: Retrieve posts based on user credentials

• POST /: Create a new post (Image upload functionality included)

• DELETE /:id: Delete a specific post by ID

• PUT /id: Update a specific post by ID (Image upload functionality included)

/apl/comments

• GET/id: Retrieve all comments for a specific post

• POST /:id: Add a new comment to a specific post

• DELETE /:id: Delete a specific comment by ID

• PUT /:id: Update a specific comment by ID

/api/likes

• GET /:postid: Retrieve all likes for a specific post

• GET /toggle/:postid: Toggle like status for a specific post
