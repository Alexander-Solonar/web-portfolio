export const springAnimation = {
  hidden: { y: -200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 8,
      mass: 1,
      delay: 0.4,
    },
  },
};

export const btnAnimation = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 8,
      mass: 1,
      delay: 0.8,
    },
  },
};

export const textAnimation = {
  hidden: { y: 400, opacity: 0 },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

export const cardAnimation = {
  hidden: {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center',
  },

  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: custom * 0.3,
      type: 'spring',
      stiffness: 200,
      damping: 25,
    },
  }),
};
