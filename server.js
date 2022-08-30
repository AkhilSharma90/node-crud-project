const http = require("http");
const app = require("./app");
const server = http.createServer(app);
require("./database/db");

if (process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

