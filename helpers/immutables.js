function NewMutables(properties) {
    return {
        type: "xprt/immutables",
        value: {
            properties: properties
        }
    }
}

module.exports = {
    NewMutables
};