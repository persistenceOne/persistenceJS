
function checkRawLog(log) {
    return new Promise(function (resolve) {
        let rawData = JSON.stringify(log)
        if ((rawData.indexOf('failed') !== -1) || (rawData.indexOf('error') !== -1)) {
            resolve(false)
        } else {
            resolve(true)
        }
    })
}

module.exports = {
    checkRawLog,
};
