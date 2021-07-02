// ? TODO: refactor @app/lib

export const formatJSONTrim = (json = null, length = 200, elipsis = '...') => {
  const str = JSON.stringify(json);
  if (str.length > length) {
    return `${str.substr(0, 200)}${elipsis}`;
  }
  return str;
};
