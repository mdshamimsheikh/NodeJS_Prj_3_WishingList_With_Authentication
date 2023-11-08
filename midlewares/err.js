class errHandler extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    };
};

export const errMidleware = (err, req, res, next) => {
    err.message = err.message || "Invaild User";
    err.statuscode=err.statuscode ||500
    res.status(err.statuscode).json({
        success: false,
        message:err.message,
    })
};

export default errHandler;