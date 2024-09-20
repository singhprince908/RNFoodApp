import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightArrow(props: any) {
  return (
    <Svg
      width="800px"
      height="800px"
      viewBox="0 -6.5 36 36"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M187.108 39.29l10.542 10.452.059.054c.18.179.277.408.291.642v.124a.984.984 0 01-.291.642l-.052.044-10.549 10.462a1.005 1.005 0 01-1.413 0 .985.985 0 010-1.402l9.008-8.934h-31.704c-.552 0-.999-.443-.999-.99a.995.995 0 011-.992h31.468l-8.773-8.7a.985.985 0 010-1.402 1.005 1.005 0 011.413 0zm10.007 11.093l-10.714 10.626L197.002 50.5v-.004l-.059-.053-.06-.06h.232z"
        transform="translate(-212 -159) translate(50 120)"
        fill="#fff"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
      />
    </Svg>
  );
}

export default RightArrow;
