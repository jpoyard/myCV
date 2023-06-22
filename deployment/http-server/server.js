// const logger = require("log4js").getLogger();
const logger = console;
const express = require("express");
const fs = require("fs");
const path = require("path");
// const { createProxyMiddleware } = require("http-proxy-middleware");

const port = 4200;
const staticFolder = path.join(process.cwd(), "dist", "myCV");
const indexFilePath = path.join(staticFolder, "index.html");

// const backEndServerUrl = "http://localhost:3000";

// logger.level = "info";

let app = express(); // Compliant

app.disable("x-powered-by");

app.use(express.static(staticFolder));
// app.use(
//   "/api",
//   createProxyMiddleware({
//     target: backEndServerUrl,
//     logger,
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "",
//     },
//   })
// );

app.get("*", function (req, res) {
  const filePath = path.join(staticFolder, 'fr-FR', req.url);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(indexFilePath);
  }
});

app.listen(port, () => {
  logger.info(`Server is listening on http://localhost:${port}`);
});
