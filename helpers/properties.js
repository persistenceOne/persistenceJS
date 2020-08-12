const NewProperty = require("./property").NewProperty;

function NewProperties(properties) {
    let propertyList = [];
    for (let i = 0; i < properties.length; i++) {
        let property = properties[i].split(':');
        propertyList.push(NewProperty(property[0], property[1]));
    }
    return {
        type: "xprt/properties",
        value: {
            propertyList: propertyList
        }
    }
}

module.exports = {
    NewProperties
};