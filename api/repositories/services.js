let services = require("./mock/services")

function getAllServices () {
    return services
}

function createService(service) {
    service.id = services.length()
    services = services.concat(service)
}

module.exports = { getAllServices, createService }