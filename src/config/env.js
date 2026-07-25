require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 3000,
    CACHE_TTL: Number(process.env.CACHE_TTL) || 300,
    REQUEST_TIMEOUT: Number(process.env.REQUEST_TIMEOUT) || 5000,
    MAX_CONCURRENT_REQUESTS: Number(process.env.MAX_CONCURRENT_REQUESTS) || 5,
    RATE_LIMIT_WINDOW: Number(process.env.RATE_LIMIT_WINDOW) || 60000,
    RATE_LIMIT_MAX: Number(process.env.RATE_LIMIT_MAX) || 30
};