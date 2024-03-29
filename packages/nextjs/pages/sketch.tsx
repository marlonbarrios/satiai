import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import react-p5
const P5Sketch = dynamic(() => import("react-p5"), { ssr: false });

const Sketch: React.FC = () => {
  const [duration, setDuration] = useState(5);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <P5Sketch
        setup={(p5, canvasParentRef) => {
          p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        }}
        draw={p5 => {
          if (showText) {
            p5.fill(200);
            p5.textSize(12);
            p5.noStroke();
            p5.text(
              `
    Try to be aware of the whole body as you 
    breathe in and out and synchronize your 
    breathing with the movement of the pulsating circle.
    You may change the speed with the slider below.

                
                Breathing in long, the practitioner knows  ‘I am breathing in long.’

                Breathing in short, the  practitioner knows ‘I am breathing in short.’

                Breathing out long, practitioner knows ‘I am breathing out long.’

                Breathing out short, practitioner knows ‘I am breathing in short.’

                The practitioner trains with ‘breathing in, I experience the whole body.’

                ‘Breathing out, I experience the whole body.’

                The practitioner trains with, ‘breathing in, I calm the bodily formation.’

                ‘Breathing out, I calm the bodily formation.’


                Mindfuness of Breathing (Anapanasati Sutta), Pāli Canon
                                `,
              20,
              50,
            );
          }

          // Black background
          p5.background(0, 10);

          // Center of screen
          const px = p5.windowWidth / 2;
          const py = p5.windowHeight / 2;

          // We will scale everything to the minimum edge of the canvas
          const minDim = p5.min(p5.windowWidth, p5.windowHeight);

          // Size is a fraction of the screen
          const size = minDim * 0.5;

          // Get time in seconds
          const time = p5.millis() / 2000;

          // Get a 'playhead' from 0..1
          // We use modulo to keep it within 0..1
          const playhead = (time / duration) % 1;

          // Get an animated value from 0..1
          // We use playhead * 2PI to get a full rotation
          const anim = p5.sin(playhead * p5.PI * 2) * 0.5 + 0.5;

          // Create an animated thickness for the stroke that
          const thickness = minDim * 0.2 * anim;

          // Turn off fill
          p5.fill(220, 10);

          // Turn on stroke and make it white
          p5.stroke(255, 5);

          // Apply thickness
          p5.strokeWeight(thickness);

          // Draw a circle centred at (px, py)
          p5.ellipse(px, py, size * anim, size * anim);
        }}
        windowResized={p5 => {
          p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        }}
      />
      <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        <input
          type="range"
          min="0"
          max="10"
          value={duration}
          onChange={event => setDuration(Number(event.target.value))}
        />
        <div>
          <input type="checkbox" checked={showText} onChange={() => setShowText(!showText)} />
        </div>
      </div>
    </div>
  );
};

export default Sketch;
