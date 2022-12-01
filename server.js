// npm i express
const express = require("express");
const morgan = require("morgan");
const app = express();

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));

// С браузера можно отправлять только гет запросы
// Остальные запросы можно делать с POSTMAN

// Мидлвар
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}, ${new Date().toISOString()}`);
  next();
});

app.get("/home", (request, response) => {
  // response.sendStatus(200);
  // response.send('get request')
  response.json({ javascript: "object" });
});

app.post("/home", (request, response) => {
  if (!req.body.goit) {
    return res.status(400).json({ status: "goit paramter is required" });
  }
  // response.send('post request')
  console.log(request.body);
  response.json({ javascript: "object", body: request.body });
});
app.delete("/home", (request, response) => {
  response.send("delete request");
});
// app.use((request,response) => {
//     response.send('middleware request')
// })

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error at a server launch: ", err);
  }
  console.log(`Server works at port ${PORT}!`);
});
