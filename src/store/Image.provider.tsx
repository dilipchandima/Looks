import React, {Component} from 'react';
import ImageContext, {Context, imageContextWrapper} from './Image.context';

interface State {
  context: Context;
}

export class ImageContextProvider extends Component {
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
