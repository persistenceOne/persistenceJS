function NewTraits(traits) {
    return {
        type: "xprt/traits",
        value: {
            traitList: traits
        }
    }
}

module.exports = {
    NewTraits
};