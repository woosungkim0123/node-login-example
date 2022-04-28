"use strict";

// DOM Document Object Model
// HTML에 존재하는 데이터들을 가져와서 제어할 수 있게 됨

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    psword: psword.vlaue,
  };
  // rest api
  // 내가 전송하는 데이터가 json 데이터라고 header에 알려줌
  // 내가 보내는 데이터의 타입 Content Type
  fetch("/login", {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
}
