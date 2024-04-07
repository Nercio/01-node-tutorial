const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("Welcome to the about page");
  }
  res.end(`
    <h1>Ooops!</h1>
    <p>We can't seem to find the page</p>
  `);
});

server.listen(5000);
