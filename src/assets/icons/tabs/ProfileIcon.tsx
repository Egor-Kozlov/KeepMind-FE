import * as React from 'react';
import Animated from 'react-native-reanimated';
import Svg, {G, Path} from 'react-native-svg';

const AnimatedG = Animated.createAnimatedComponent(G);

function ProfileIcon({fill = '#1C274C', ...props}) {
  return (
    <Svg width="80px" height="80px" viewBox="0 0 24 24" fill={fill} {...props}>
      <AnimatedG fillRule="evenodd" clipRule="evenodd">
        <Path d="M8.25 9a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM12 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
        <Path d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 2.75a9.25 9.25 0 00-6.558 15.773c.18-.973.535-1.89 1.246-2.628C7.753 14.791 9.454 14.25 12 14.25c2.546 0 4.247.541 5.311 1.645.712.738 1.066 1.655 1.247 2.629A9.25 9.25 0 0012 2.75zm5.194 16.905c-.102-1.212-.365-2.1-.962-2.719-.65-.673-1.853-1.186-4.232-1.186-2.379 0-3.582.513-4.232 1.186-.597.62-.86 1.507-.962 2.72A9.207 9.207 0 0012 21.25a9.208 9.208 0 005.194-1.595z" />
      </AnimatedG>
    </Svg>
  );
}

export default ProfileIcon;
