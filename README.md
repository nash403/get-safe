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
const toto = {
  foo: {
    bar: {
      baz: ['winter','is','coming'],
      fifo () {
        console.log("I'am a function");
        return 42;
      }
    }
  }
};

// Tests
console.log(_('foo.bar.baz.2',toto)); // logs 'coming'
console.log(_('foo.bar.fifo()',toto)); // calls the nested function 'fifo' and logs its result
console.log(_('foo.inexistant.property.baz',toto)); // logs 'undefined'
```
