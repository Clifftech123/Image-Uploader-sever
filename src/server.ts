import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// your routes and middleware go here
app.get('/', (req: Request, res: Response) => {
  const name  =  " we are doing out best to make  things work"
  res.send(name);

});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
