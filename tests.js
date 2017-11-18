const _ = require("./");
const myobj = {
  foo: {
    bar: {
      baz: ["winter", "is", "coming"],
      fifo(arg1, arg2) {
        console.log(
          "`console.log` from function, arguments are:",
          ...arguments
        );
        return 42;
      }
    },
    astring: "John Doe"
  }
};

// Tests
console.log(`
The tested object is:
\`\`\`
const myobj = ${JSON.stringify(myobj, null, 2)}
\`\`\`
`);

////////////////////////
console.log("Accessing to myobj.foo.bar.baz.2 should log 'coming'\n");
console.log("result>", _("foo.bar.baz.2", myobj), "\n");

////////////////////////
console.log(
  "Accessing to myobj.foo.bar.fifo() should call the fifo function\n"
);
// calls the nested function 'fifo' with its arguments and logs its result (42)
console.log("result>", _("foo.bar.fifo()", myobj, "arg1", "arg2"), "\n");

////////////////////////
console.log(
  "Accessing to myobj.foo.inexistant.property.baz should log 'undefined'\n"
);
console.log("result>", _("foo.inexistant.property.baz", myobj), "\n");

////////////////////////
console.log(
  "Accessing to myobj.foo.inexistant.property.baz with default value should log 'default value'.\n"
);
console.log(
  "result>",
  _("foo.inexistant.property.baz", myobj, "'default value'"),
  "\n"
);

////////////////////////
console.log("Accessing to myobj.foo.inexistantFn() should log 'undefined'\n");
console.log("result>", _("foo.inexistantFn()", myobj, "arg"), "\n");

////////////////////////
console.log("Accessing to myobj.foo.astring.substring(5) should log 'Doe'\n");
console.log("result>", _("foo.astring.substring()", myobj, 5), "\n");
