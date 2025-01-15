const imgToCache = {
    rock: "/src/assets/images/answer/rock.png",
    paper: "/src/assets/images/answer/paper.png",
    scissors: "/src/assets/images/answer/scissors.png"
};

function preloadImages(): void {
    Object.values(imgToCache).forEach((path) => {
        const img = new Image();
        img.src = path;
    });
}

function getImagePath(choice: keyof typeof imgToCache): string {
    return imgToCache[choice];
}

preloadImages();

export { getImagePath, imgToCache };

