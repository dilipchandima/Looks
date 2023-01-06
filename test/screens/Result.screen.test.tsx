import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import ResultScreen from 'screens/Result.screen';

const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('Result Screen', () => {
  it('should match to snapshot', () => {
    const screen = render(<ResultScreen navigation={navigation} />);
    expect(screen).toMatchSnapshot();
  });

  it('should render the retake and use photo buttons', () => {
    const {queryByText} = render(<ResultScreen navigation={navigation} />);
    expect(queryByText('Retake')).toBeTruthy();
    expect(queryByText('Use photo')).toBeTruthy();
  });

  it('should call navigation when press the Retake button', () => {
    const {getByText} = render(<ResultScreen navigation={navigation} />);
    const button = getByText('Retake');
    fireEvent.press(button);

    expect(navigation.goBack).toHaveBeenCalledTimes(1);
  });
});
