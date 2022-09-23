export const delay = (func: any) => {
  return setTimeout(func, 2000);
};

export const getRandomProgress = () => {
  return Math.floor(Math.random() * 100);
};
