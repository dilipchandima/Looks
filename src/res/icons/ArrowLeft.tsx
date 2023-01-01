import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowLeft = () => {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="#c74a4e"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}>
      <Path d="M19 12L5 12" />
      <Path d="M12 19L5 12 12 5" />
    </Svg>
  );
};

export default ArrowLeft;
