import express from 'express';
import userRouter from './src/features/users/user.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';
import postRouter from './src/features/posts/post.routes.js';
import commentRouter from './src/features/comments/comment.routes.js';
import likeRouter from './src/features/likes/like.routes.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';


const server = express();
server.use(express.json());

server.use(loggerMiddleware)

server.use("/api/users", userRouter);
server.use("/api/posts",jwtAuth, postRouter);
server.use("/api/comments",jwtAuth, commentRouter);
server.use("/api/likes",jwtAuth, likeRouter);



server.get("/",  (req,res)=>{
    res.send("Welcome to Social Media API")
})

server.listen(3000, ()=>{
    console.log('server is running at 3000');
})