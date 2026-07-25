const auditService = require("../services/auditService");
const concurrency = require("../middleware/concurrency");

exports.auditUrl = async (req, res) => {

    try {

        const { url } = req.body;

        const result = await concurrency(() =>
            auditService.auditWebsite(url)
        );

        res.json({
            success: true,
            data: result
        });

    } catch (error) {

        const status =
            error.message === "Request timed out" ? 408 : 500;

        res.status(status).json({
            success: false,
            error: {
                code: status === 408
                    ? "REQUEST_TIMEOUT"
                    : "AUDIT_FAILED",
                message: error.message
            }
        });

    }

};