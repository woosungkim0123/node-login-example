"use strict";

const app = require("../app");
const logger = require("../src/config/logger");
const PORT = process.env.PORT || 3000;
// PORT를 가져오지 못하면 3000을 적용함
app.listen(PORT, () => {
  logger.info(`http://localhost:${PORT} 서버 가동중`);
});
