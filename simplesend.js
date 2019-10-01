const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kbk109@gmail.com',
        pass: '*****'
    }
});

const mailOptions = {
    from: 'kbk109@gmail.com',
    to: 'kbk109@gmail.com',
    subject: 'nodemailer 테스트',
    html: '<h1>hello nodemailer</h1>'
};

transporter.sendMail(mailOptions)
    .then(info => (
        console.log(info.response)
    ))
    .catch(error => {
        console.log(error);
    });