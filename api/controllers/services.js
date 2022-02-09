const listServices = require("../repositories/services/index")

function getServices() {
    const services = listServices()
    return services
}



module.exports = getServices