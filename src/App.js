import React from "react";
import { Canvas } from "react-three-fiber";
import { Text } from "drei";
import "./styles.css";

export default function App() {
  return (
    <Canvas>
      <Text
        color={"#EC2D2D"}
        fontSize={1}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign={"top"}
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        LOREM IPSUM.
      </Text>
    </Canvas>
  );
}
