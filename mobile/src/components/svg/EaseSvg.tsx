import * as React from 'react';
import Svg, { Path, Rect } from "react-native-svg";
// /* SVGR has dropped some elements not supported by react-native-svg: title */

interface PropsIcon {
  color: string;
  size?: Number;
  focused?: Boolean; 
};

const EaseSvg: React.FC<PropsIcon> = ({
  color, 
  size,
  focused, 
  ...rest 
  }) => {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 512 512" 
      {...rest}
    >
      <Rect
        x={48}
        y={80}
        width={416}
        height={272}
        rx={32}
        ry={32}
        fill="none"
        stroke={focused ? '#8257e5' : color}
        strokeLinejoin="round"
        strokeWidth={32}
      />
      <Path
        fill="none"
        stroke={focused ? '#8257e5' : color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112"
      />
    </Svg>
  )
}

export default EaseSvg;