const express = require("express");
const app = express();

const PORT = 3000;

// Generate logs every 2 seconds
setInterval(() => {
  const log = {
    time: new Date().toISOString(),
    level: ["INFO", "WARN", "ERROR"][Math.floor(Math.random() * 3)],
    message: "Sample log message",
  };

  console.log(JSON.stringify(log));
}, 2000);

app.get("/", (req, res) => {
  res.send("Log generator is running...");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});