import {Component, createContext} from 'react';

const initialImageState = {
  image: '',
};

export const imageContextWrapper = (component?: Component) => ({
  ...initialImageState,
  setImage: (image: string) => {
    initialImageState.image = image;
    component?.setState({context: imageContextWrapper(component)});
  },
});

export type Context = ReturnType<typeof imageContextWrapper>;

const ImageContext = createContext<Context>(imageContextWrapper());

export default ImageContext;
