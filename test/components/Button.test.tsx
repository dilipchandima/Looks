import React from 'react';

import {render} from '@testing-library/react-native';
import Button from 'components/Button';

const onPress = jest.fn();

describe('ButtonComponent', () => {
  it('should match to snapshot', () => {
    const screen = render(<Button title="NEXT" onPress={onPress} />);
    expect(screen).toMatchSnapshot();
  });
});
