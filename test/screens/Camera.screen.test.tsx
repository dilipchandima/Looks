import React from 'react';

import {render} from '@testing-library/react-native';
import CameraScreen from 'screens/Camera.screen';

const nav = {
  navigate: jest.fn(),
};

describe('Camera Screen', () => {
  it('should match to snapshot', () => {
    const screen = render(<CameraScreen navigation={nav} />);
    expect(screen).toMatchSnapshot();
  });
});
