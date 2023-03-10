import nodemailer from 'nodemailer';
import crypto from 'crypto';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import { MailToken } from '../models/token.js';

//sendgrid transporter
export const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.SENDGRID_API_KEY,
      },
    })
  );

  
  //send verification email
export const send_verify_email = async (from, to, subject, userID, username) => {

    try {
        
        //create verification token and insert it into dB
        const new_mail_token = await MailToken.create({
            uid: userID,
            token: crypto.randomBytes(32).toString('hex')
        });
        // console.log('new_mailtoken', new_mailtoken)
        // console.log(transporter)
        //generate message of the email
        const verify_msg = mail_msg_template(
            username,
            `${process.env.BASE_URL}/api/verify/email/${new_mail_token.uid}/${new_mail_token.token}`
        );

        // console.log('verify_message', verify_msg)
    
        //send email
        await transporter.sendMail({from, to, subject, html:verify_msg});

        console.log('test3');
        
    } catch (error) {
        console.error(error.message);
    }
}

function mail_msg_template(username, link) {
    // console.log('function mail_msg_template');
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                body{
                    background-color: whitesmoke;
                }
                .container{
                    border: 1px solid black;
                    width: 60vw;
                    margin: auto;
                    padding: 2rem 1rem;
                }

                #logo{
                    margin: 1rem auto;
                    text-align: center;
                    color: coral;
                    font-style: italic;
                    font-size: 1.3rem;
                }

                #title{
                    font-weight: 600;
                    margin-bottom: 1.2rem;
                    color: dimgray;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }

                p{
                    color: dimgray;
                    margin-bottom: 2rem;
                    font-weight: 200;
                    font-size: 0.9rem;
                }

                a{
                    display: block;
                    margin:auto;
                    color: white;
                    background-color: #017BFF;
                    width: 13rem;
                    text-align: center;
                    padding: 1rem;
                    text-decoration: none;
                    border-radius: 5px;
                    box-shadow: 2px 2px 5px black;
                    font-weight: 500;
                    font-size: 0.9rem;
                }

                a:hover{
                    background-color: rgb(98, 139, 243);
                }


            </style>
        </head>
        <body>
            <div class="container">
                <h3 id="logo">DevBook</h3>
                <h4 id="title">Hi ${username},</h4>
                <p>Thanks for creating a DevBook account. Please verify your email address by clicking the button below and Develop your Connections.</p>
                <div>
                    <a href="${link}">Verify email address</a>
                </div>
            </div>
        </body>
        </html>



`;
}

