import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CloseIcon(props) {
  return (
    <Svg
      width="80px"
      height="80px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#8f8f8f"
      {...props}>
      <Path
        d="M18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
        stroke="#8f8f8f"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CloseIcon;
