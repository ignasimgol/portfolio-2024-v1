export const preloadImages = async (imageUrls) => {
    const loadImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
      });
    };
  
    return Promise.all(imageUrls.map(url => loadImage(url)));
  };