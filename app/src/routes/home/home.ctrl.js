"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["woosung0123", "나개발", "김팀장"],
  psword: ["1234", "1234", "123456"],
};

const process = {
  login: (req, res) => {
    const { id } = req.body,
      { psword } = req.body;
    console.log(users.id.includes(id));
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        // return으로 나가기 때문에 else 안써도됨
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
