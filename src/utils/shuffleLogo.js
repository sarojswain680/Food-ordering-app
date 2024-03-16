import { useEffect, useState } from "react";
import { LOGO_URL } from "./constants";

const useShuffledLogo = () => {
    const [logoImage, setLogoImage] = useState(LOGO_URL[0]);
    
    const shuffleImages = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
}

  useEffect(() => {
      const getLogoImage = shuffleImages(LOGO_URL)
      setLogoImage(getLogoImage)
  }, []);

  // boolean value
  return logoImage;
};

export default useShuffledLogo;
