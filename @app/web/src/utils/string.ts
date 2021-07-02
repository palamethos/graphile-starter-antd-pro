// ? TODO: refactor @app/lib

export const escapeLikeStringValue = (value: string = '') => {
  if (value.includes('%')) {
    return value; // someone knows it is like so dont force
  }
  return `%${value}%`;
};
