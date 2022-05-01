const { createLogger, transports, format } = require("winston");
const { colorize, combine, timestamp, printf, label, simple } = format;

const printFormat = printf(
  ({ timestamp, label, level, message }) =>
    `${timestamp} [${label}] ${level} : ${message}`
);

const printLogFormat = {
  file: combine(
    label({
      label: "로그인 시스템",
    }),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat
  ),
  console: combine(colorize(), simple()),
};

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
  }),
  console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
  }),
};

const logger = createLogger({
  transports: [opts.file],
});
// 이걸통해 실제서버와 개발을 구분함
if (process.env.NODE_ENV !== "production") {
  logger.add(opts.console);
}

// morgan과 logger 같이사용
logger.stream = {
  write: (message, encoding) => logger.info(message, encoding),
};

module.exports = logger;
