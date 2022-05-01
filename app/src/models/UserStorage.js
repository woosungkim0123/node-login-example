"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const QUERY = "SELECT * FROM users where id = ?;";
      db.query(QUERY, [id], (err, data) => {
        // reject랑 resolve가 같이 있으면 resolve가 반환됨
        if (err) reject(err);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const QUERY = "INSERT INTO users(id, name, psword) VALUE(?, ?, ?);";
      db.query(QUERY, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
