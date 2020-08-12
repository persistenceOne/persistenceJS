const NewID = require("./id").NewID;
const NewFact = require("./fact").NewFact;

function NewProperty(propertyID, fact) {
    return {
        type: "xprt/property",
        value: {
            id: NewID(propertyID),
            fact: NewFact(fact, false)
        }
    }
}

module.exports = {
    NewProperty
};