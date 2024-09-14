import * as React from "react";
import Svg, { Rect } from "react-native-svg";

export default function TrainCar() {
  return (
    <Svg width="60" height="85" viewBox="0 0 32 60" style={{ marginTop: -5 }}>
      <Rect
        x="1"
        y="2"
        width="30"
        height="55"
        fill="white"
        stroke="black"
        rx="3"
        ry="3"
      />
      <Rect x="15" y="57" width="1" height="3" stroke="black" strokeWidth="1" />
    </Svg>
  );
}
