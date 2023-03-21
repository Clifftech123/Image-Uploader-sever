import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import imagesRoutes from './routes/ImageRoutes';

const app = express();
const port = 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/imageUploader', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api/images', imagesRoutes);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// Start the server
app.listen(port, () =>
