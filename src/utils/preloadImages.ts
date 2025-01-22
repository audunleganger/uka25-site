const preloadImages = (imagePaths: string[]) => {
    console.log("preloading images...");
    imagePaths.forEach((imagePath) => {
        const img = new Image();
        img.src = imagePath;
    });
};

export default preloadImages;
