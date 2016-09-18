(function(){
  // Utils
  function isFnCall(key){
    if (typeof key !== 'string') return false;
    return key.slice(-2) === "()";
  }
  /*
   * @param {key} string concatenation of nested keys in this form: 'foo.bar.toto'.
   *  You can even call a function if the last key ends with '()'.
   * @param {obj} the object we are accessing
   * @param {...args} a sequence of arguments that may be passed to the function we are calling
   * @return a nested value OR the result of a nested function OR undefined
   */
  function def_export(key, obj, ...args) {
    let splitted = key.split('.');
    let lastkey = splitted.pop();
    isFnCallLastkey = isFnCall(lastkey);
    lastkey = isFnCallLastkey ? lastkey.slice(0,-2) : lastkey;
    let beforelast = splitted.reduce((a,b) => {
      return a && a[b];
    }, obj);
    return beforelast && (typeof beforelast === 'object') && (isFnCallLastkey ? beforelast[lastkey](...args) : beforelast[lastkey]);
  };

  // Exports
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = def_export;
  }
  else {
    window.getSafe = def_export;
  }
})();
