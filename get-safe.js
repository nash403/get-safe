// Utils
const isFnCall = function(key) {
  if (typeof key !== "string") return false;
  return key.slice(-2) === "()";
};

/*
 * You can't use '.' on null or undefined values
 */
const hasProperties = function(obj) {
  return obj !== null && obj !== undefined;
};

/*
 * @param {key} string concatenation of nested keys in this form: 'foo.bar.toto'.
 *  You can even call a function if the last key ends with '()'.
 * @param {obj} the object we are accessing
 * @param {...args} a sequence of arguments that may be passed to the fn you are calling.
 *                  If you are NOT making a fn call, args[0] may contain the default to return
 *                  instead of undefined.
 * @return a nested value OR
 *         the result of a nested function OR
 *         undefined OR
 *         the default value if you are not making a fn call
 */
module.exports = (key, obj, ...args) => {
  const splitted = key.split(".");
  let lastkey = splitted.pop();
  const isFnCallLastkey = isFnCall(lastkey);
  lastkey = isFnCallLastkey ? lastkey.slice(0, -2) : lastkey;
  const beforelast = splitted.reduce((a, b) => {
    return hasProperties(a) ? a[b] : undefined;
  }, obj);
  const defaultValueIfNotFnCall = args[0];
  return hasProperties(beforelast)
    ? isFnCallLastkey
      ? beforelast[lastkey] && typeof beforelast[lastkey] === "function"
        ? beforelast[lastkey](...args)
        : undefined
      : beforelast[lastkey]
    : isFnCallLastkey ? undefined : defaultValueIfNotFnCall;
};
