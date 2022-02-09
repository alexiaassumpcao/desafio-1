const { listServices, newService } = require("../use-cases/services")

function getServices() {
    const services = listServices()
    return services
}

function createNewService(service) {
    const error = newService(service)
    return error
}


module.exports = { getServices, createNewService }