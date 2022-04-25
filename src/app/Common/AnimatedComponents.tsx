import { Flex, FlexProps, SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const animationFlex = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
};

export const itemAnimationX = {
  hidden: { x: -60 , opacity: 0 },
  visible: {
    x: 0,
    opacity: 1
  }
};

export const itemAnimationY = {
  hidden: { y: 60 , opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const MotionSimpleGrid = motion<SimpleGridProps>(SimpleGrid);
export const MotionFlex = motion<FlexProps>(Flex);