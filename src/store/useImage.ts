import {useContext} from 'react';

import ImageContext from './Image.context';

export const useImage = () => {
  const {image, setImage} = useContext(ImageContext);

  return {image, setImage};
};
