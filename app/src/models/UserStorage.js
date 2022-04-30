"use strict";

class UserStorage {
  static _users = {
    id: ["woosung0123", "나개발", "김팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["김우성", "니개발", "김팀장"],
  };
  static getUsers(...fields) {
    const users = this._users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    const users = this._users;
    const idx = users.id.indexOf(id); // 있으면 있는위치 없으면 -1
    const usersKeys = Object.keys(users); // id, psword, name
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;
