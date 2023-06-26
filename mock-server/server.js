const jsonServer = require("json-server");
const path = require("path");

const source = path.join(__dirname, "db.json");
const host = "localhost";
const port = 3000;
const logger = false;

if (!require("fs").existsSync(source)) {
  initDBFile(source);
}

/** JSON Server */
const server = jsonServer.create();

// Middlewares
const middlewares = jsonServer.defaults({ logger });
server.use(middlewares);

// Router
const router = jsonServer.router(source);
server.use(jsonServer.bodyParser);

server.use(router);

server.listen(port, () => {
  console.log(`http://${host}:${port}`);
});


/** Create db.json */
function initDBFile(outputFile) {
  const fs = require("fs/promises");
  const join = require("path").join;

  /** Create db.json */
  const rootDir = join(__dirname, "mock-data");

  fs.readdir(rootDir).then((files) => {
    Promise.all(files.map((fileName) => extractData(join(rootDir, fileName))))
      .then((objects) => objects.reduce((acc, cur) => ({ ...acc, ...cur }), {}))
      .then((result) =>
        fs.writeFile(outputFile, JSON.stringify(result, null, 2))
      );
  });
}

function extractData(path) {
  const name = require("path").basename(path).split(".")[0];
  return require("fs/promises")
    .readFile(path)
    .then((data) => ({ [name]: JSON.parse(data) }));
}
