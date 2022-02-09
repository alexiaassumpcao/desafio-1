const { getAllServices, createService } = require("../repositories/services")

function listServices() {
    const services = getAllServices()
    return services
}


function newService(service) {
    if (service.id !== undefined) {
        return `ERROR - Serviço não deve ser inserido com ID`
    }
    createService(service)
    return ""
}

module.exports = { listServices, newService }