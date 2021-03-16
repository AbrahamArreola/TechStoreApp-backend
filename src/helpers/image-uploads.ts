import Cloudinary, { UploadApiResponse } from "cloudinary";
import { FileArray, UploadedFile } from "express-fileupload";

const cloudinary = Cloudinary.v2;
cloudinary.config(process.env.CLOUDINARY_URL as string);

const validMimes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

export const uploadImage = (
    productImg: FileArray | undefined
): Promise<UploadApiResponse> => {
    return new Promise(async (resolve, reject) => {
        if (productImg == undefined || productImg.image == undefined) {
            reject("There is no image to upload");
            return;
        }

        const image = productImg?.image as UploadedFile;
        const mimetype = image.mimetype;

        if (!validMimes.includes(mimetype)) {
            reject(
                `Invalid image extension. Valid extensions are: ${validMimes}`
            );
            return;
        }

        try {
            const { tempFilePath } = image;
            const response = await cloudinary.uploader.upload(tempFilePath, {
                folder: "products",
            });

            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
};
