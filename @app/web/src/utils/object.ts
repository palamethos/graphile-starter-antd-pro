import { transform, isEqual, isObject } from 'lodash';

// ? TODO: refactor @app/lib

export const diffObjects = (object, base) => {
  return transform(object, (result, value, key) => {
    if (!isEqual(value, base[key])) {
      result[key] = isObject(value) && isObject(base[key]) ? diffObjects(value, base[key]) : value; // @TODO: make sure this doesn't partially return changed object!?
    }
  });
};
