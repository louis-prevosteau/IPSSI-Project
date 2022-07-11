module.exports = req => {
    if (!req.headers.authorization) {
        const error = new Error("No authorization from headers")
        error.statusCode =  401;
        error.validation = validationErrors.array();
        throw error;
    }
}