import React, {Component} from 'react';
import type {ReactElement} from 'react';

import ImageContext, {Context, imageContextWrapper} from './Image.context';

interface State {
  context: Context;
}

type Props = {
  children: ReactElement[] | ReactElement;
};

export class ImageContextProvider extends Component<Props> {
  state: State = {
    context: imageContextWrapper(this),
  };

  render() {
    return (
      <ImageContext.Provider value={this.state.context}>
        {this.props.children}
      </ImageContext.Provider>
    );
  }
}
