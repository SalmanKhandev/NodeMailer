const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "enter  service here",
  host: "enter hostname here",
  port: 465,
  secureConnection: true,
  auth: {
    user: "youremail.com",
    pass: "your password",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const options = {
  from: "sender email",
  to: "receiver email",
  subject: "testing Email",
  text: "wow this is some email",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(info.response);
});
