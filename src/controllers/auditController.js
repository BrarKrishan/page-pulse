const auditService = require("../services/auditService");

exports.auditUrl = async (req, res) => {

    try {

        const { url } = req.body;

        if (!url) {

            return res.status(400).json({
                success: false,
                error: {
                    code: "URL_REQUIRED",
                    message: "URL is required"
                }
            });

        }

        const result = await auditService.auditWebsite(url);

        return res.json({
            success: true,
            data: result
        });

    } catch (error) {

         const status =
             error.message === "Request timed out" ? 408 : 500;

         return res.status(status).json({
              success: false,
              error: {
                  code:
                      status === 408
                          ? "REQUEST_TIMEOUT"
                          : "AUDIT_FAILED",
                  message: error.message
              }
         });

    }

};