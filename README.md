# the-type-counter-in-the-object-node-js

Node.js module to create a new object in which the keys are types, the values are the number of these types.

## Installation

+ ```npm install the-type-counter-in-the-object-node-js```

## Usage

<script>

  /*
      Import the module.
  */
  const theTypeCounterInTheObject = require('./the_type_counter_in_the_object.js');

  /*
      Use the module according to the instructions.
      Create a variable. Write to it, through a dot from the "module", a function (createObjectOfType(object)) with an object argument that creates a new object with types and their number.
  */

  const result = theTypeCounterInTheObject.createObjectOfType({ field: undefined, anotherField: [], yetAnother: [undefined] });

  /*
      Output/use the result, for example, to the console.
  */

  console.log(result);

</script>

## License

MIT
