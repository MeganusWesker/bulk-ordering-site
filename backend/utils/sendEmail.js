const nodemailer = require('nodemailer');

const sendEmail = async (options)=>{
    const {email , subject ,message} = options;
    const transporter = nodemailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
         service:process.env.SMPT_SERVICE,
         auth:{
             user:process.env.SMPT_MAIL,
             pass:process.env.SMPT_PASSWORD
         }

        });

        const mailOptions ={
            from:process.env.SMPT_MAIL,
            to:email,
            subject:subject,
            text:message
        }

    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;