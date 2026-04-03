const express = require("express");
const client = require("prom-client");

const app = express();

// Collect default system metrics
client.collectDefaultMetrics();

// Custom metric: request counter
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests"
});

// Home route
app.get("/", (req, res) => {
  httpRequests.inc();
  res.send("Hello, Monitoring World!");
});

// Metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});