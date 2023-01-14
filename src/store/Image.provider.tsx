import React, {useState} from 'react';
import type {ReactElement} from 'react';

import ImageContext from './Image.context';

type Props = {
  children: ReactElement[] | ReactElement;
};

export const ImageContextProvider = ({children}: Props) => {
  const [image, setImage] = useState('');

  return (
    <ImageContext.Provider value={{image, setImage}}>
      {children}
    </ImageContext.Provider>
  );
};
