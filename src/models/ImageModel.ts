import mongoose from 'mongoose';

// Define the ImageDocument interface
export interface ImageDocument extends mongoose.Document {
  name: string;
  data: Buffer;
  contentType: string;
}

// Define the ImageSchema
const ImageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

// Create the Image model
export const Image = mongoose.model<ImageDocument>('Image', ImageSchema);
