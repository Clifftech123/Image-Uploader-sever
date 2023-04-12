import express from "express";
import bodyParser from "body-parser";


// MAIN APP CLASS

class App {
    /// APP AND PORT
    public app: express.Application;
    public port: number;
  

    // CONSTRUCTOR 
    // method to initialize the app and port
    constructor(controllers, port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this .loggerMiddlewar ()
        this.initializeControllers(controllers);
    }

    /// Midware method to initialize the middlewares
    // and pass the middlewares to the app
    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }


    // logger middleware for logging the request
    // and pass the middlewares to the app 
    // 
    private loggerMiddlewar() {
        this.app.use((req, res, next) => {
            console.log(`${req.method} ${req.path}`);
            next();
        });
    }
   


     // CONTROLLERS   method to initialize the controllers 
     // and pass the controllers to the app   
    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
    }
     

 
    // LISTENING TO THE PORT
    // method to listen to the port 
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}



export default App;