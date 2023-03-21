// config.ts

const config = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/image-uploader"
  };
  
  export default config;
  