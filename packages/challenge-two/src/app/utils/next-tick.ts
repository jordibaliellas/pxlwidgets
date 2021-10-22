export const nextTick = (fn: Function): void => {
  setTimeout(() => {
    fn();
  }, 0);
};
