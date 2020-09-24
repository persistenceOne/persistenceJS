const NewProperty = require("./property").NewProperty;

function NewProperties(properties) {
    let propertyList = [];
        let property = properties.split(':');
        propertyList.push(NewProperty(property[0], property[1]));
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