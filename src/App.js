import React from "react";
import { Canvas } from "react-three-fiber";
import { Text } from "drei";
import font from "./fonts/PinyonScript-Regular.ttf";
import "./styles.css";

export default function App() {
  return (
    <>
      <Canvas>
        <Text
          color={"#EC2D2D"}
          fontSize={1}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={"top"}
          font={font}
          anchorX="center"
          anchorY="middle"
        >
          Karina Gazal.
        </Text>
      </Canvas>
    </>
  );
}
