import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Close(props: any) {
  return (
    <Svg
      fill="#FFF"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="150px"
      height="150px"
      {...props}>
      <Path d="M9.156 6.313L6.312 9.155 22.157 25 6.22 40.969 9.03 43.78 25 27.844 40.938 43.78l2.843-2.843L27.844 25 43.687 9.156l-2.843-2.844L25 22.157z" />
    </Svg>
  );
}

export default Close;
