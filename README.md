# get-safe
#### Safe access to nested properties in JS objects without getting a TypeError but undefined instead.
***
You can even call a nested function in objects if the last nested key ends with `()`. You can pass arguments by adding them as last parameters of the get-safe function call.
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
