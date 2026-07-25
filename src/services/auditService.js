const axios = require("axios");
const cache = require("../cache/cache");

const REQUEST_TIMEOUT = 5000;

exports.auditWebsite = async (url) => {

    // Check cache first
    const cached = cache.get(url);

    if (cached) {
        return {
            ...cached,
            cached: true
        };
    }

    try {

        const start = Date.now();

        const response = await axios.get(url, {
            timeout: REQUEST_TIMEOUT,
            maxRedirects: 5
        });

        const end = Date.now();

        const result = {
            url,
            statusCode: response.status,
            responseTime: `${end - start} ms`,
            contentLength: response.headers["content-length"] || "Unknown",
            contentType: response.headers["content-type"] || "Unknown",
            cached: false
        };

        cache.set(url, result);

        return result;

    } catch (error) {

        if (error.code === "ECONNABORTED") {
            throw new Error("Request timed out");
        }

        throw error;

    }

};