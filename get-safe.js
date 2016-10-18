// Utils
const isFnCall = function (key){
  if (typeof key !== 'string') return false;
  return key.slice(-2) === "()";
};

/* A value is accesible once it has properties.
 * This said, strings and numbers are accessible, soly undefined and null aren't
 */
const isAccessible = function (obj) {
  return obj !== null && obj !== undefined;
};

/*
 * @param {key} string concatenation of nested keys in this form: 'foo.bar.toto'.
 *  You can even call a function if the last key ends with '()'.
 * @param {obj} the object we are accessing
 * @param {...args} a sequence of arguments that may be passed to the function we are calling
 * @return a nested value OR the result of a nested function OR undefined
 */
module.exports = (key, obj, ...args) => {
  let splitted = key.split('.');
  let lastkey = splitted.pop();
  let isFnCallLastkey = isFnCall(lastkey);
  lastkey = isFnCallLastkey ? lastkey.slice(0,-2) : lastkey;
  let beforelast = splitted.reduce((a,b) => {
    return isAccessible(a) && a[b];
  }, obj);
  return isAccessible(beforelast) ? (isFnCallLastkey ? beforelast[lastkey](...args) : beforelast[lastkey]) : undefined;
};
