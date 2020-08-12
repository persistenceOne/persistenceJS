function NewMutables(properties, maintainersID) {
    return {
        type: "xprt/mutables",
        value: {
            properties: properties,
            maintainersID: maintainersID
        }
    }
}

module.exports = {
    NewMutables
};