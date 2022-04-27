// 내장모듈
const http = require("http");
const app = http.createServer((req, res) => {
  // 내가 보내는게 text중에 html이고 utf8로 해석을 해달라
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url === "/") {
    // 한글이 깨져서 나옴

    res.end("root입니다");
  } else if (req.url === "/login") {
    res.end("login입니다");
  }
});
// 서버가 열려있으나 root경로가없어서 계속 도는 것
app.listen(3001, () => {
  console.log("http로 가동된 서버");
});
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("hi");
// });
// app.get("/login", (req, res) => {
//   res.send("로그인 화면");
// });
// app.listen(3000, () => {
//   console.log("localhost:3000");
// });
