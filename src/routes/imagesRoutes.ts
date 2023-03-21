import express from 'express';
import multer from 'multer';
import { createImage, getImage } from '../controllers/ImageController';

const router = express.Router();

// Set up Multer middleware for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for creating a new image
router.post('/', upload.single('image'), createImage);

// Route for getting an image by its ID
router.get('/:id', getImage);

export default router;
