function NewImmutables(properties) {
    return {
        type: "xprt/immutables",
        value: {
            properties: properties
        }
    }
}

module.exports = {
    NewImmutables
};