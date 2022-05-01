"use strict";

const app = require("../app");
const PORT = process.env.PORT || 3000;
// PORT를 가져오지 못하면 3000을 적용함
app.listen(PORT, () => {
  console.log("http://localhost:3000");
});
