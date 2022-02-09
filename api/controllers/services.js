const { listServices, newService } = require("../use-cases/services")
const { ERRORS } = require("../constants/errors")

function getServices() {
    const services = listServices()
    return services
}

function createNewService(service) {
    const error = newService(service)
    return ERRORS[error]
}


module.exports = { getServices, createNewService }