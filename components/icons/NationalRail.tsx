import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

export default function SvgComponent() {
  return (
    <Svg
      width={31}
      height={20}
      viewBox="0 0 31 20"
      scale={0.5}
      preserveAspectRatio="xMidYMid meet"
      font-size="12"
    >
      <G fill="none" stroke="#ED1C24">
        <Path strokeWidth={6} d="m1-8.9 45 21.3-30 14.2 45 21.3" />
        <Path strokeWidth={6.4} d="M0 12.4h62m0 14.2H0" />
      </G>
    </Svg>
  );
}
