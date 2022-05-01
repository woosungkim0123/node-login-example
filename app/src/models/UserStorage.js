"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const QUERY = "SELECT * FROM users where id = ?;";
      db.query(QUERY, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const QUERY = "INSERT INTO users(id, name, psword) VALUE(?, ?, ?);";
      db.query(QUERY, [userInfo.id, userInfo.name, userInfo.psword], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
