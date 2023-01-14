import {createContext} from 'react';

const initialImageState = {
  image: '',
  setImage: (_: string) => {},
};

const ImageContext = createContext(initialImageState);

export default ImageContext;
