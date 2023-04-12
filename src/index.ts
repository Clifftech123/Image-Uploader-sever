

import App from "./app";
import PostsController from "./posts/Post.Controller";


//  INITIALIZE   THE APP AND PORT


const app = new App(
    [
        new PostsController()
    ]

    , 3000
)


// LISTEN TO THE PORT

app.listen();