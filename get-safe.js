// Utils
function isFnCall(key){
  if (typeof key !== 'string') return false;
  return key.slice(-2) === "()";
}
/*
 * @param {key} string concatenation of nested keys in this form: 'foo.bar.toto'.
 *  You can even call a function if the last key ends with '()'.
 * @param {obj} the object we are accessing
 * @return a nested value OR the result of a nested function OR undefined
 */
module.exports = function (key, obj) {
  let splitted = key.split('.');
  let lastkey = splitted.pop();
  isFnCallLastkey = isFnCall(lastkey);
  lastkey = isFnCallLastkey ? lastkey.slice(0,-2) : lastkey;
  let beforelast = splitted.reduce((a,b) => {
    return a && a[b];
  }, obj);

  return beforelast && (typeof beforelast === 'object') && (isFnCallLastkey ? beforelast[lastkey]() : beforelast[lastkey]);
}
