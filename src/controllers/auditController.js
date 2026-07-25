const auditService = require("../services/auditService");

let activeRequests = 0;
const MAX_CONCURRENT = 5;

exports.auditUrl = async (req, res) => {

    if (activeRequests >= MAX_CONCURRENT) {
        return res.status(429).json({
            success: false,
            error: {
                code: "TOO_MANY_CONCURRENT_REQUESTS",
                message: "Server is busy. Please try again shortly."
            }
        });
    }

    activeRequests++;

    try {

        const result = await auditService.auditWebsite(req.body.url);

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        const status = error.message === "Request timed out" ? 408 : 500;

        res.status(status).json({
            success: false,
            error: {
                code: status === 408 ? "REQUEST_TIMEOUT" : "AUDIT_FAILED",
                message: error.message
            }
        });

    } finally {
        activeRequests--;
    }

};