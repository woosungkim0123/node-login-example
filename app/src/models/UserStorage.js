"use strict";

class UserStorage {
  // 정적 변수로 만들어야 불러올 수 있음
  // static을 사용하면 클래스 자체에서 변수에 접근을 할 수있음
  // static users
  // 원래 접근 불가하도록 하는게 맞음(다른 외부파일에서 내부 데이터에 )
  // 변수를 은닉화해줘야함 (#표시 public에서 private로 선언해주는것)
  // 은닉화하면 undefined가 출력됨
  static _users = {
    id: ["woosung0123", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["김우성", "니개발", "김팀장"],
  };
  // 클래스 자체에서 메서드에 접근하려면 static을 붙여줘야함
  // 이런식으로 데이터를 은닉화하고 메서드로 전달해줘야함
  static getUsers(...fields) {
    const users = this._users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log(newUsers);
    return this._users;
  }
}

module.exports = UserStorage;
