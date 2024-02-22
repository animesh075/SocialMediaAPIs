import { ApplicationError } from "../../error-handler/applicationError.js";


export default class UserModel{
    constructor(name, email, password, id, bookmarks){
        this.name=name;
        this.email=email;
        this.password=password;
        this.id=id;
        this.bookmarks = bookmarks || [];
    }

    static signUp(name, email, password){
        try {
            const newUser = new UserModel(name, email, password);
            newUser.id=`U_${users.length + 1}`;
            users.push(newUser);
            return newUser;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500);
        }
    }

    static signIn(email, password){
        try {
            const user = users.find(u=>u.email==email && u.password==password);
            return user;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500)
        }
    }

    static addBookmark(userId, postId) {
        try {
            const user = users.find(u => u.id == userId);
            if (user) {
                user.bookmarks.push(postId);
                return user;
            }
            return null;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500)
        }
    }

    static removeBookmark(userId, postId) {
        try {
            const user = users.find(u => u.id == userId);
            if (user) {
                user.bookmarks = user.bookmarks.filter(pId => pId !== postId);
                return user;
            }
            return null;
        } catch (err) {
            console.log(err);
            throw new ApplicationError("Something Went Wrong", 500)
        }
    }
}

var users=[
    {
        id:'U_1',
        name:'user',
        email:'user@sm.com',
        password:'password1'
    }
]