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
    psword: psword.value,
  };
  // rest api
  // 내가 전송하는 데이터가 json 데이터라고 header에 알려줌
  // 내가 보내는 데이터의 타입 Content Type
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      // 에러 처리
      console.error(new Error("로그인 중 에러 발생"));
      console.error("로그인 중 에러 발생");
    });
  // promise가 날라옴
  // res.json의 반환값은 promise이다. 기본 res의 반환값은 response 스트림인데 json() 메서드를 통해 response(응답) 스트림을 읽을 수 있다
  // response는 데이터가 모두 받아진 상태가 아니다 json()으로 response 스트림을 가져와 완료될떄 까지 읽는다.
  // 다읽은 body의 텍스트를 Promise 형태로 반환한다
  // promise로 들어와서 then으로 한번더 받아서
  // 파라미터로 넘기는 값을 함수 안에 다시 넘길때는 생략가능
  // then(console.log) 똑같이 동작
}
