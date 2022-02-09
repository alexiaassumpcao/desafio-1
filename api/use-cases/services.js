const listServicesRepo = require("../repositories/services")

function listServices() {
    const services = listServicesRepo()
    return services
}

module.exports = listServices