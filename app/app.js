"use strict";

// 모듈
const express = require("express");
const dotenv = require("dotenv");
// 어떤 os에서 개발하든 동일하게 환경변수를 등록하고 가져올 수 있음
dotenv.config();
// 실행시키면 .env에 저장되어있는 변수들을 nodejs에서 접근할 수 있도록 해줌
const app = express();
// 라우팅
const home = require("./src/routes/home");
// 앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
