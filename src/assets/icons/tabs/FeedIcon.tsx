import {Path, Svg} from '@app/components';
import * as React from 'react';
import Animated from 'react-native-reanimated';

const AnimatedG = Animated.createAnimatedComponent(Path);

function FeedIcon({fill = '#1C274C', ...props}) {
  return (
    <Svg width="80px" height="80px" viewBox="0 0 24 24" fill={fill} {...props}>
      <AnimatedG
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.944 1.25h2.112c1.838 0 3.294 0 4.433.153 1.172.158 2.121.49 2.87 1.238.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v4.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.944c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM6.71 2.89c-1.006.135-1.586.389-2.01.812-.422.423-.676 1.003-.811 2.009-.138 1.028-.14 2.382-.14 4.289v4c0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008.423.423 1.003.677 2.009.812 1.028.138 2.382.14 4.289.14h2c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812.423-.423.677-1.003.812-2.009.138-1.027.14-2.382.14-4.289v-4c0-1.907-.002-3.261-.14-4.29-.135-1.005-.389-1.585-.812-2.008-.423-.423-1.003-.677-2.009-.812-1.027-.138-2.382-.14-4.289-.14h-2c-1.907 0-3.261.002-4.29.14zM7.25 10A.75.75 0 018 9.25h8a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm0 4a.75.75 0 01.75-.75h5a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75z"
      />
    </Svg>
  );
}

export default FeedIcon;
