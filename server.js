const http = require("http");
const app = require("./app");
const server = http.createServer(app);


const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

