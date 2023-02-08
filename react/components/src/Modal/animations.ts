export const contentAnimation = {
  hidden: {
    transform: 'translate(-50%, -48%) scale(0.96)',
    opacity: 0,
    transition: {
      delay: 0.15
    }
  },
  visible: {
    transform: 'translate(-50%, -50%) scale(1)',
    opacity: 1,
    transition: {
      duration: 0.15
    }
  },
  exit: {
    transform: 'translate(-50%, -48%) scale(0.96)',
    opacity: 0,
    transition: {
      duration: 0.15
    }
  }
}
