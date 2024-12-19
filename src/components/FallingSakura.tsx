import React, { useEffect, useState } from "react";
import '../assets/styles/FallingSakura.scss'; // Import the SCSS file
import leafImage from '../assets/images/leaf1.png'; // Pre-load image

const FallingSakura = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const container = document.getElementById('falling-leaves-container');
    if (!container) return; // Ensure the container exists

    const createLeaf = () => {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';

      // Randomize leaf properties
      const randomX = Math.random() * 100 - 50; // Random x position (-50% to 50%)
      const randomY = Math.random() * 100; // Random y position (0% to 100%)
      const randomRotate = Math.random() * 360; // Random rotation
      const randomSpeed = Math.random() * 3 + 7; // Random fall speed between 7s and 10s

      // Set custom properties for random positions and speed

      leaf.style.setProperty('--random-y', `${randomY}%`);
      leaf.style.setProperty('--random-x', `${randomX}vw`);
      leaf.style.setProperty('--random-rotate', `${randomRotate}deg`);
      leaf.style.setProperty('--fall-speed', `${randomSpeed}s`);

      // Append leaf to container
      container.appendChild(leaf);

      // Remove leaf after animation ends
      leaf.addEventListener('animationend', () => {
        leaf.remove();
      });
      const interval = setInterval(createLeaf, 500); // Create a new leaf every 500ms
      return () => clearInterval(interval); // Cleanup on unmount
    };

    const interval = setInterval(createLeaf, 500); // Create a new leaf every 500ms
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.src = leafImage;
  }, []); // Load image on component mount

  return (
    <div id="falling-leaves-container">
      {!isLoaded && <p>Loading...</p>}
      {isLoaded && <div className="falling-leaf"></div>/*Create initial leaf (hidden)*/} 
    </div>
  );
};

export default FallingSakura;
