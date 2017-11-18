# get-safe

> Safe access to deeply nested properties or functions in JS objects without getting a TypeError but undefined instead.

***
You can even call a nested function in objects if the last nested key ends with `()`. You can pass arguments by adding them as last parameters of the get-safe function call.
***

#### Install:

Using npm
```
npm install get-safe --save
```

Using yarn:
```bash
yarn add navscroll
```

Directly include it in html:
```html
<!-- Browsers with ES module support load this file. -->
<script type="module" src="node_modules/get-safe/browser-version/get-safe.js"></script>

<!-- Older browsers load this file (and module-supporting -->
<!-- browsers know when *not* to load this file). -->
<script nomodule src="node_modules/get-safe/browser-version/get-safe-legacy.js"></script>
```

<p class="warning" style="background: rgba(0,255,0,.05);border-radius: 3px;padding: 1.5em;">
Warning! The only gotcha here is Safari 10 doesn’t support the nomodule attribute, but you can solve this by <a href="https://gist.github.com/samthor/64b114e4a4f539915a95b91ffd340acc">inlining a JavaScript snippet</a> in your HTML prior to using any <code>&#x3C;script nomodule&#x3E;</code> tags. (Note: this has been fixed in Safari 11).
</p>

<p class="tip" style="background-color: #DCF2FD;color: #618ca0;padding: 0.75em 1em;">
The browser version adds the `getSafe` function to the 'window' object that you can use !
</p>

#### How to use
 ```JavaScript

const _ = require ('get-safe');
const myObj = {
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
console.log(_('foo.bar.baz.2',myObj)); // logs 'coming'
console.log(_('foo.bar.fifo()',myObj,'arg1','arg2')); // calls the nested function 'fifo' and logs its result
console.log(_('foo.inexistant.property.baz',myObj)); // logs 'undefined'
```
