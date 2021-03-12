import cloudinary from "cloudinary";

const validExtensions = ["jpg", "jpeg", "png", "gif"];

export const uploadImage = (productImg: FileList) => {
    console.log(productImg);
    
   /*  return new Promise((resolve, reject) => {
        const [img] = productImg;
        const imgNameSplit = img.name.split(".");
        const extension = imgNameSplit[imgNameSplit.length - 1];

        if (!validExtensions.includes(extension)) {
            return reject(
                `Image type not supported. Supported types: ${validExtensions}`
            );
        }
    }); */
};
