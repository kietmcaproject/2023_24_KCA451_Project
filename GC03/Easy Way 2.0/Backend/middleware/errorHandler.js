const constants = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    // console.log("Inside errorHandler! Code: ", res.statusCode);
    // res.json({
    //     title: "Validation Failed", 
    //     message: err.message, 
    //     stackTrace: err.stack
    // });

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized", 
                message : err.messgae, 
                stackTrace: err.stack
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found", 
                message : err.messgae, 
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_ERROR:
            console.log("statusCode: ", statusCode);
            res.json({
                title: "Server error", 
                message : err.messgae, 
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No error, All seems good!", statusCode);
            break;
    }
    
    
};

module.exports = errorHandler;