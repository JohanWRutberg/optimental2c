"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";

const Paralaxx = () => {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
      <ParallaxLayer offset={0} speed={0.1}>
        <div className="animation_layer parallax" id="layer0"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax" id="layer1"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax" id="layer2"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.7}>
        <div className="animation_layer parallax" id="layer3"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.2}>
        <TextBlock />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Paralaxx;
