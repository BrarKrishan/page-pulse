const express = require("express");
const rateLimiter = require("./middleware/rateLimiter");
const requestId = require("./middleware/requestId");
const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Page Pulse API</title>

<style>
body{
    font-family:Arial,sans-serif;
    max-width:900px;
    margin:60px auto;
    padding:20px;
    background:#f7f7f7;
    color:#222;
}

.container{
    background:white;
    padding:40px;
    border-radius:12px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

code{
    background:#eee;
    padding:3px 8px;
    border-radius:4px;
}

.footer{
    margin-top:40px;
    text-align:center;
    color:#666;
    font-size:14px;
}
</style>

</head>

<body>

<div class="container">

<h1>Page Pulse API</h1>

<p>The API is running successfully.</p>

<h3>Available Endpoint</h3>

<p>
<code>POST /api/audit</code>
</p>

<h3>Sample JSON</h3>

<pre>
{
  "url":"https://google.com"
}
</pre>

<div class="footer">

Built for
<a href="https://digitalheroesco.com" target="_blank">
Digital Heroes Training Task
</a>

</div>

</div>

</body>
</html>
`);
});

app.use("/api", auditRoutes);
app.use(rateLimiter);
app.use(requestId);

module.exports = app;