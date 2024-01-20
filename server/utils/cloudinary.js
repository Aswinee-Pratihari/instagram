import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const fileUpload = async (filePath) => {
  try {
    console.log(filePath);
    if (!filePath) {
      return null;
    }

    const res = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
    });

    //  File uploaded successfully, now remove file from local server
    fs.unlinkSync(filePath);

    return res.secure_url;
  } catch (error) {
    // Handle any errors here
    console.error("Error uploading file:", error);

    // Remove file from local server even if there is an error during upload
    fs.unlinkSync(filePath);

    return null;
  }
};
