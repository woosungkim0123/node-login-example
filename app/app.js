"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const app = express();
// 어떤 os에서 개발하든 동일하게 환경변수를 등록하고 가져올 수 있음
dotenv.config();
// 실행시키면 .env에 저장되어있는 변수들을 nodejs에서 접근할 수 있도록 해줌
//const accessLogStream = require("./src/config/log");

// 라우팅
const home = require("./src/routes/home");
// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(morgan("dev"));
//app.use(morgan("common", { stream: accessLogStream }));

// 스트림은 데이터가 왔다갔다 하는 연결통로
// 여기서는 로그데이터가 왔다갔다함
app.use("/", home);

module.exports = app;
