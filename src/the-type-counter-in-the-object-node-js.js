module.exports.createObjectOfType = createObjectOfType;

/**
 *  Returns a new object. The types of values from the argument object will be written to the keys, and the number of these types will be written to the values.
 *  @param {object} object A simple, non-nested object.
 *  @returns {object} An object with keys-types and values-the number of these types.
 */
function createObjectOfType(object) {
    const values = Object.values(object);
    const newObjectFromTypeAndQuantity = {};

    for (const value of values) {
        let type = typeof value;

        if (value === null) {
            type = 'null';
        }

        if (Array.isArray(value)) {
            type = 'array';
        }

        if (newObjectFromTypeAndQuantity[type]) {
            newObjectFromTypeAndQuantity[type] += 1;
        } else {
            newObjectFromTypeAndQuantity[type] = 1;
        }
    }
    
    return newObjectFromTypeAndQuantity; 
};
