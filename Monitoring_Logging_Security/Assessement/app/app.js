const express = require("express");
const client = require("prom-client");

const app = express();

// Collect default system metrics
client.collectDefaultMetrics();

// Existing metric
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests"
});

// ✅ NEW Custom Metric: Error Counter
const errorCounter = new client.Counter({
  name: "http_errors_total",
  help: "Total number of error responses"
});

// Home route
app.get("/", (req, res) => {
  httpRequests.inc();
  res.send("Hello, Monitoring World!");
});

// ✅ Error route (for testing)
app.get("/error", (req, res) => {
  errorCounter.inc();   // increase error count
  res.status(500).send("Internal Server Error");
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