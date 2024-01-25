# types-counter-in-the-object-node-js

Node.js module to create a new object in which the keys are types, the values are the number of these types.

## Installation

```
npm install the-types-counter-in-the-object-node-js
```

## Usage

Import the module.

```js
const typesCounterInTheObject = require('types-counter-in-the-object-node-js');
```

Use the module according to the instructions.
Create a variable. Write to it, through a dot from the "module", a function (createObjectOfType(object)) with an object argument that creates a new object with types and their number.

```js
const result = typesCounterInTheObject.createObjectOfTypes({ field: undefined, anotherField: [], yetAnother: [undefined] });
```

Output/use the result, for example, to the console.

```js
console.log(result);
```

## License

MIT
