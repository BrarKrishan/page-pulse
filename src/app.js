const express = require("express");

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

module.exports = app;