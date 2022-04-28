"use strict";

/*
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
*/
// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");
// 앱세팅
// 저장될 폴더이름을 두번째 파라미터로
app.set("views", "./src/views");
app.set("view engine", "ejs");
// 미들웨어로 정적 경로 설정
// __dirname은 app.js가 있는 위치를 가르킴
// public 경로를 정적 경로로 추가해주겠다는 의미
app.use(express.static(`${__dirname}/src/public`));
// json데이터를 파싱할 수 있도록.
app.use(express.json());
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될경우
// 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;

// pakage

// bin은 바이너리 바이너리안에는 실행파일이 담김
// dependencies는 소프트웨어가 사용될때 영향을 미치는것
// devdependencies는 개발을 할때만 필요한 것
// MIT 저작권 명시 필요X 상업적으로 사용가능
// node moduels는 설치한 dependencies들이 여기 저장되고 사용되기위해 필요한 모듈들도
// 설치됨

// package-lock은 좀더 명확한 버전을 설치하기 위해서
// ^캐롯의 의미는 3.1.5면 3.2.5 3.3.5까지 허용하지만 4.으로 올라가는 버전은 설치x
// ~은 마지막버전이 3.1.5 3.1.6 3.1.7 끝에 버전이 업데이트되면 버전을 가져와서 설치해달라는 의미
