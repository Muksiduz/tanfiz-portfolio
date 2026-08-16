// src/animations/projectAnimations.js

export const projectContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const projectReveal = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const projectImage = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.04,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const projectOverlay = {
  rest: {
    opacity: 0,
  },

  hover: {
    opacity: 1,

    transition: {
      duration: 0.4,
    },
  },
};

export const projectContent = {
  rest: {
    opacity: 0,
    y: 20,
  },

  hover: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const projectTitle = {
  rest: {
    opacity: 0,
    y: 15,
  },

  hover: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      delay: 0.05,
    },
  },
};

export const projectCategory = {
  rest: {
    opacity: 0,
    y: 10,
  },

  hover: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
    },
  },
};
