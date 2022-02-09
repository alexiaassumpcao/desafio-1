const { getAllServices, createService } = require("../repositories/services")
const { ERROR_TYPE_ID, ERROR_TYPE_TYPE } = require("../constants/errorsTypes")
const { ENUM_TYPE } = require("../constants/service")
function listServices() {
    const services = getAllServices()
    return services
}


function newService(service) {
    if (service.id !== undefined) {
        return ERROR_TYPE_ID
    }
    if(ENUM_TYPE.includes(service.type) === false) {
        return ERROR_TYPE_TYPE
    }
    createService(service)
    return ""
}

module.exports = { listServices, newService }