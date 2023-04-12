import express from 'express';
import { Request, Response } from 'express';
import Post from './post.interface';

class PostsController {

    // Initialize the path
    public path = '/posts';
    public router = express.Router();
 
    
    // Initialize the private posts array
    private posts: Post[] = [
        {
            author: 'John',
            content: 'Hello World',
            title: 'Hello World'
        }
    ]

    // Constructor to initialize the path

    constructor() {
        this.initializeRoutes();
    }

    // Initialize the routes

    public initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
     

    // Home Route 

    // Get all posts
    // GET /posts
    getAllPosts = (req:Request , res:Response) => {
        res.send(this.posts);
    }


    // Create a post
    // POST /posts  

    createAPost = (req:Request , res:Response) => {
        const post: Post = req.body;
        
        // validate the post
         if (post.author && post.content && post.title) {
            this.posts.push(post);
            res.send(post);
         }
         else {
            res.status(400).send('Bad Request all fields are required');
         }

        
    }


}


export default PostsController;