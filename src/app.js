const express = require("express");
const rateLimiter = require("./middleware/rateLimiter");
const requestId = require("./middleware/requestId");
const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        application: "Page Pulse API",
        status: "Running",
        version: "1.0.0"
    });
});

app.use("/api", auditRoutes);
app.use(rateLimiter);
app.use(requestId);

module.exports = app;