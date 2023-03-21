import { Request, Response, NextFunction } from 'express';
import { Image } from '../models/ImageModel';

// Controller function to create a new image
export const createImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }

    // Create a new image object with the uploaded file's data
    const image = new Image({
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    });

    // Save the image to the database
    await image.save();

    // Send the URL of the newly created image to the client
    const imageUrl = `${req.protocol}://${req.get('host')}/api/images/${image._id}`;
    res.status(200).send(imageUrl);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Controller function to get an image by its ID
export const getImage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Find the image in the database by its ID
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).send('Image not found');
    }

    // Set the content type of the response to the image's content type and send the image data
    res.set('Content-Type', image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
