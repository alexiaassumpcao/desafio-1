const listServices = require("../use-cases/services")

function getServices() {
    const services = listServices()
    return services
}



module.exports = getServices