
type Animation = {
  from : object,
  to : object,
  out : object,
}

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const homeTitle : Animation = {
  from: {
    y: 60,
    opacity: 0
  },
  to: {
    y: 0,
    opacity: 1,
    transition
  },
  out: {
    y: -60,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
}

export const aboutTitle: Animation = {
  from: { scale: 0.9, opacity: 0 },
  to: { scale: 1, opacity: 1, transition },
  out: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};