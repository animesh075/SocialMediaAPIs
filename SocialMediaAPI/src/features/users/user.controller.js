import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';


export default class UserController{
    signUp(req, res){
        try {
            const {name, email, password}=req.body;
            const user=UserModel.signUp(name, email, password);
            res.status(201).send(user);
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }

    signIn(req, res){
        try {
            const result=UserModel.signIn(req.body.email,req.body.password);
        if(!result){
            return res.status(400).send("Invalid Credentials");
        }else{
            // 1. Create Token
            const token = jwt.sign({userId: result.id, email:result.email}, "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz",{
                expiresIn:'1h'
            })
            return res.status(200).send(token)
        }
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }

    async addBookmark(req, res) {
        try {
            const { userId, postId } = req.params;
            const updatedUser = await UserModel.addBookmark(userId, postId);
            res.status(200).send(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }
    
    async removeBookmark(req, res) {
        try {
            const { userId, postId } = req.params;
            const updatedUser = await UserModel.removeBookmark(userId, postId);
            res.status(200).send(updatedUser);
        } catch (err) {
            console.log(err);
            return res.status(200).send("Something went wrong");
        }
    }
}