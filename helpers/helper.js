const config = require("../config.json")

function FindInResponse(type, list, id) {
    let data = {
        'clasificationID': '',
        'hashID': ''
    }

    let ordersData = {
        'clasificationID': '',
        'makerownableid': '',
        'takerownableid': '',
        'makerID': '',
        'hashID': ''
    }

    return new Promise(function (resolve, reject) {
        switch (type) {
            case 'assets':
                list.forEach(function (value) {
                    if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                        data.clasificationID = value.value.id.value.classificationID.value.idString
                        data.hashID = value.value.id.value.hashID.value.idString
                        resolve(data);
                    }
                });
                break;
            case 'identities':
                list.forEach(function (value) {
                    if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                        data.clasificationID = value.value.id.value.classificationID.value.idString
                        data.hashID = value.value.id.value.hashID.value.idString
                        resolve(data);
                    }
                });
                break;
            case 'classifications':
                list.forEach(function (value) {
                    if (value.value.immutableTraits.value.properties.value.propertyList[0].value.id.value.idString === id) {
                        data.chainID = value.value.id.value.chainID.value.idString
                        data.hashID = value.value.id.value.hashID.value.idString
                        resolve(data);
                    }
                });
                break;
            case 'orders':
                list.forEach(function (value) {
                    if (value.value.immutables.value.properties.value.propertyList[0].value.id.value.idString === id) {
                        ordersData.clasificationID = value.value.id.value.classificationID.value.idString
                        ordersData.makerownableid = value.value.id.value.makerOwnableID.value.idString
                        ordersData.takerownableid = value.value.id.value.takerOwnableID.value.idString
                        ordersData.makerID = value.value.id.value.makerID.value.idString
                        ordersData.hashID = value.value.id.value.hashID.value.idString
                        resolve(ordersData);
                    }
                });
                break;
        }
    })
}

function checkRawLog(log) {
    return new Promise(function (resolve, reject) {
        let rawData = JSON.stringify(log)
        console.log("rawData^^^^^^^^^^^^^^^^^6: " + rawData)
        if (rawData.indexOf('failed') > -1) {
            resolve(false)
        } else if (rawData.indexOf('error') > -1) {
            resolve(false)
        } else {
            resolve(true)
        }
    })
}

function GetIdentityID(identity) {
    return identity.value.id.value.classificationID.value.idString + config.FirstOrderCompositeIDSeparator +
        identity.value.id.value.hashID.value.idString
}

function GetAssetID(asset) {
    return asset.value.id.value.classificationID.value.idString + config.FirstOrderCompositeIDSeparator +
        asset.value.id.value.hashID.value.idString
}

function GetOrderID(order) {
    return order.value.id.value.classificationID.value.idString + config.SecondOrderCompositeIDSeparator +
        order.value.id.value.makerOwnableID.value.idString + config.SecondOrderCompositeIDSeparator +
        order.value.id.value.takerOwnableID.value.idString + config.SecondOrderCompositeIDSeparator +
        order.value.id.value.makerID.value.idString + config.SecondOrderCompositeIDSeparator +
        order.value.id.value.hashID.value.idString
}

function GetIdentityIDs(identities) {
    return identities.forEach(function (identity) {
        GetIdentityID(identity)
    })

}

function FilterIdentitiesByProvisionedAddress(identities, address) {
    return identities.filter(function filterFunc(identity) {
        return identity.value.provisionedAddressList.includes(address)
    })
}

function FilterSplitsByIdentities(splits, identityIDs) {
    splits.filter(function (split) {
        return identityIDs.includes(split.value.id.value.ownerID.value.idString)
    })
}

module.exports = {
    FindInResponse,
    checkRawLog,
    GetAssetID,
    GetIdentityID,
    GetOrderID

};
