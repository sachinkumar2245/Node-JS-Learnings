// import nodemailer module
const nodemailer = require ('nodemailer');
const { text } = require('stream/consumers');


// 2. configure email and send it

async function sendEmail() {
    // 1. create an email transporter
    // SMTP (simple mail transfer protocol)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sachinkumm3570@gmail.com',
             pass: ''
            
        }
    });

    // 2. configure email content

    const mailOptions = {
        form:'sachinkumm3570@gmail.com',
        to: 'sachinmusic2219@gmail.com',
        subject: 'Welcome to NodeJS App',
        text: 'This is an email using nodemailer in nodejs'

    };

    try {
       const result = await transporter.sendMail(mailOptions);
       console.log('email sent succesfully');
       
    } catch (error) {
        console.log('Email not send becuase: ',error);
        
    }

    
    
}

sendEmail();