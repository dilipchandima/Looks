import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Check = () => {
  return (
    <Svg
      fill="none"
      height={24}
      stroke="#1ca340"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}>
      <Path d="M20 6L9 17 4 12" />
    </Svg>
  );
};

export default Check;
