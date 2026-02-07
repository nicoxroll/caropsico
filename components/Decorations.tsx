import React from 'react';
import { motion, MotionStyle } from 'framer-motion';

interface BlobProps {
  className?: string;
  style?: MotionStyle;
}

export const BlobPink: React.FC<BlobProps> = ({ className = "", style }) => (
  <motion.svg style={style} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`absolute pointer-events-none opacity-30 ${className}`}>
    <path fill="#F472B6" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.2,34.3C60.2,45.7,49.5,54.9,37.6,62.6C25.7,70.3,12.6,76.5,-1.2,78.6C-15,80.7,-29.7,78.7,-42.6,71.9C-55.5,65.1,-66.6,53.5,-74.6,40.1C-82.6,26.7,-87.5,11.5,-85.4,-2.8C-83.3,-17.1,-74.2,-30.5,-64.1,-41.8C-54,-53.1,-42.9,-62.3,-30.7,-70.6C-18.5,-78.9,-5.2,-86.3,4.9,-94.8L15,-103.3L44.7,-76.4Z" transform="translate(100 100)" />
  </motion.svg>
);

export const BlobPurple: React.FC<BlobProps> = ({ className = "", style }) => (
  <motion.svg style={style} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={`absolute pointer-events-none opacity-30 ${className}`}>
    <path fill="#C084FC" d="M37.5,-63.9C49.9,-57.8,62.1,-51.2,70.8,-41.5C79.5,-31.8,84.7,-19.1,84.6,-6.5C84.4,6.1,78.9,18.5,70.9,29.3C62.9,40.1,52.4,49.3,41.1,56.1C29.8,62.9,17.7,67.3,4.6,60.9C-8.5,54.5,-22.6,37.3,-35.8,24.8C-49,12.3,-61.3,4.5,-65.4,-6.2C-69.5,-16.9,-65.4,-30.5,-56.3,-41.4C-47.2,-52.3,-33.1,-60.5,-19.6,-65.2C-6.1,-69.9,25.1,-70,37.5,-63.9Z" transform="translate(100 100)" />
  </motion.svg>
);
