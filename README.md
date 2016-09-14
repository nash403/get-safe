# get-safe
#### Safe access to nested properties in JS objects without getting a TypeError but undefined instead.
***
You can even call a nested function in objects if the last nested key ends with `()`.

**Note:** You can't pass arguments to the function (this is a *TODO* for a future version)
***
#### Install:
`npm install get-safe --save`

#### How to use
 ```JavaScript

const _ = require ('get-safe');
const totoObj = {
  foo: {
    bar: {
      baz: ['winter','is','coming'],
      fifo (arg1, arg2) {
        console.log("I'am a function, arguments are:",...arguments);
        return 42;
      }
    }
  }
};

// Tests
console.log(_('foo.bar.baz.2',totoObj)); // logs 'coming'
console.log(_('foo.bar.fifo()',totoObj,'arg1','arg2')); // calls the nested function 'fifo' and logs its result
console.log(_('foo.inexistant.property.baz',totoObj)); // logs 'undefined'
```
