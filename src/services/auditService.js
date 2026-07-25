const axios = require("axios");

const REQUEST_TIMEOUT = 5000;

exports.auditWebsite = async (url) => {
    try {
        const start = Date.now();

        const response = await axios.get(url, {
            timeout: REQUEST_TIMEOUT,
            maxRedirects: 5
        });

        const end = Date.now();

        return {
            url,
            statusCode: response.status,
            responseTime: `${end - start} ms`,
            contentLength: response.headers["content-length"] || "Unknown",
            contentType: response.headers["content-type"] || "Unknown"
        };

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            throw new Error("Request timed out");
        }

        throw error;
    }
};