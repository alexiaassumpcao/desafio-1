const ERRORS = {
    ID_ON_SERVICE: {
        statusCode: 400,
        message: `ERROR - Serviço não deve ser inserido com ID`
    },
    WRONG_TYPE: {
        statusCode: 400,
        message: `ERROR - Serviço possui tipo errado, fora do ENUM, precisa ser: BIG, SHORT ou MEDIUM`
    },
}


module.exports = { ERRORS }