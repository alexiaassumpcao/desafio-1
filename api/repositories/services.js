let services = require("./mock/services")

function getAllServices () {
    return services
}

function createService(service) {
    service.id = services.length + 1
    services = services.concat(service)
}

module.exports = { getAllServices, createService }