import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    message: "Hello Cloud ☁️",
    docs: ["/health", "/version", "/saludos", "/docs", "/ping"],
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (_req, res) => {
  res.json({ name: "hello-cloud", version: "1.0.0" });
});

app.get("/saludos", (_req, res) => {
  res.json({ saludo: "hola" });
});

app.get("/docs", (_req, res) => {
  res.json({ docs: "https://github.com/norbeydanilo/hello-cloud" });
});

app.get("/ping", (_req, res) => {
  res.json({ pong: true, at: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});