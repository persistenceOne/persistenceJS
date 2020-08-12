const NewID = require("./id").NewID;
const NewProperty = require("./property").NewProperty;

function NewTrait(traitID, fact, mutable) {
    return {
        type: "xprt/trait",
        value: {
            id: NewID(traitID),
            property: NewProperty(traitID, fact),
            mutable: mutable
        }
    }
}

module.exports = {
    NewTrait
};