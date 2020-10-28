
function FindInResponse(type, list, id) {
    let data = {
        'clasificationID': '',
        'hashID': ''
    }

    let ordersData = {
        'clasificationID': '',
        'makerownableid':'',
        'takerownableid':'',
        'makerID':'',
        'hashID': ''
    }

    return new Promise(function(resolve, reject) {
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
    return new Promise(function(resolve, reject) {
        let rawData = JSON.stringify(log)
        console.log("rawData^^^^^^^^^^^^^^^^^6: " +rawData)
        if (rawData.indexOf('failed') > -1) {
            resolve(false)
        } else if (rawData.indexOf('error') > -1) {
            resolve(false)
        }else{
            resolve(true)
        }
    })
}

module.exports = {
    FindInResponse,
    checkRawLog
};
