function NewID(id) {
    return {
        type: "xprt/id",
        value: {
            idString: id
        }
    }
}

module.exports = {
    NewID
};