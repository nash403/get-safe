const _ = require("./");
const toto = {
  foo: {
    bar: {
      baz: ["winter", "is", "coming"],
      fifo(arg1, arg2) {
        console.log("I'am a function, arguments are:", ...arguments);
        return 42;
      }
    },
    astring: "John Doe"
  }
};

// Tests
console.log("The tested object is:", JSON.stringify(toto));
console.log("- Accessing to toto.foo.bar.baz.2");
console.log(_("foo.bar.baz.2", toto)); // logs 'coming'
console.log("- Accessing to toto.foo.bar.fifo() and calling the fifo function");
console.log(_("foo.bar.fifo()", toto, "arg1", "arg2")); // calls the nested function 'fifo' and logs its result (42)
console.log(
  '- Accessing to toto.foo.inexistant.property.baz, should log "undefined"'
);
console.log(_("foo.inexistant.property.baz", toto)); // logs 'undefined'
console.log('- Accessing to toto.foo.astring.substring(5), should log "Doe"');
console.log(_("foo.astring.substring()", toto, 5)); // logs 'Doe'
