"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TextBlock from "./textBlock";
import Hero from "./Hero";
import Footer from "./Footer";

const Paralaxx = () => {
  const heading = "Välkommen!";
  const message = "Gå ner";
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
      {/* Hero layer */}
      <ParallaxLayer style={{ zIndex: 1 }} offset={0} speed={0.2}>
        <Hero heading={heading} message={message} />
      </ParallaxLayer>

      {/* layer 0 */}
      <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" id="layer0"></div>
      </ParallaxLayer>

      {/* layer 1 */}
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="animation_layer parallax" id="layer1"></div>
      </ParallaxLayer>

      {/* layer 2 */}
      <ParallaxLayer offset={0} speed={0.6}>
        <div className="animation_layer parallax" id="layer2"></div>
      </ParallaxLayer>

      {/* Layer 3 */}
      <ParallaxLayer offset={0} speed={0.8}>
        <div className="animation_layer parallax" id="layer3"></div>
      </ParallaxLayer>

      {/* Layer 4 */}
      <ParallaxLayer offset={0} speed={1.3}>
        <div className="animation_layer parallax" id="layer4"></div>
      </ParallaxLayer>

      {/* Second page */}
      <ParallaxLayer offset={1} speed={0.5}>
        <TextBlock />
      </ParallaxLayer>

      {/* <ParallaxLayer offset={2} speed={0.5}> */}
      {/*   <TextBlock /> */}
      {/*   <div className="fixed bottom-0"> */}
      {/*     <Footer /> */}
      {/*   </div> */}
      {/* </ParallaxLayer> */}
    </Parallax>
  );
};

export default Paralaxx;
