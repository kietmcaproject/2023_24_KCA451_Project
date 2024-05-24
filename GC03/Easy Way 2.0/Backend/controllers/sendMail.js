const dotenv = require('dotenv').config();
const nodemailer = require("nodemailer");

    async function sendMail(email, code) {
    let testAccount = await createTestAccount();
    // connect with the smtp
    let transporter = await createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.mailID,
            pass: process.env.mailPassword
        },
    });


    let info = await transporter.sendMail({
        from: process.env.mailID, // sender address
        to: email, // list of receivers
        subject: "Easy way provides you a better way to access day to day life services!", // Subject line
        text: "", // plain text body
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verification Page</title>
            <style>
                 *{
                    box-sizing: border-box;
                }
                table{
                    border: transparent;
                    background-color: rgb(220, 216, 216);
                    border: none;
                    border-spacing: 0px;
                     border-radius: 0.25rem; 
                    /* box-shadow: 2px 3px 10px;  */
                  
                }
                body{
                    /* background-color: rgb(248, 225, 217); */
                    display: flex;
                    flex-direction: column-reverse;
                    justify-content: center;
                    align-items: center;
                    font-size: 16px;
                }
                .title{
                    margin-bottom: 1rem;
                    overflow: hidden;
                    color: rgb(4, 55, 150);
                    font-size: 2em;
                    font-weight: bolder;
                   
                    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                }
                tr{
                    text-align: center;
                }
                
                .top{
                    background-color: rgb(4, 55, 150);
                    color: white;
                    padding-bottom: 1rem;
                }
                .msg{
                    font-size: large;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                }
        
                
                .code{
                   
                    background-color: orange;
                    border-radius: 4px;
                    color: white;
                    font-size: 2em;
                    display: initial;
                    padding-left: 1rem;
                    padding-right: 1rem;
                    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
        
                }
        
                .contactus{
                    margin-top: 1rem;
                    padding-top: 1rem;
                    /* line-height: 30px; */
                    font-size: 1.5rem;
                    padding-bottom: 1rem;
                   
                }
                .copywrite{
                    background-color: rgb(4, 55, 150);
                    color: white;
                    width: 100%;
                    padding-left: 0px;
                    padding-right: 0px;
                    height: 1.75rem;
                    text-align: center;
                    padding-top: 5px;
                    border-bottom-left-radius: 0.25rem; 
                    border-bottom-right-radius: 0.25rem;
                }
              
            </style>
        </head>
        <body>
            <table  style="background-color: rgb(237, 242, 243);;">
                <th class="title"> Easy<img src="https://drive.google.com/uc?export=view&id=1SM_3kWz9cckg7bCiQDwje3X76BKySSzr" alt="logo">Way</th>
                <tbody>
                    <tr class="top">
                        <td>
                            <img src="https://drive.google.com/uc?export=view&id=1GhR10Ud4KMVY5dHahmrCQMzGRATkZGtk" alt="" width="150">
                            <p>Thanks for signing up!<br><br>
                                <span style="font-size: 2rem;">Verify Your E-mail Address</span>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="msg">Hi,<br>You're almost ready to get started. Please click on the button below to verify your email address and enjoy exclusive services with us!</div>
                            <div class="code">${code}</div>
                            <div><br><br></div>
                        </td>
                    </tr>
                   <tr>
                   
                   </tr>
                    <tr class="footer">
                        <td style=" background-color: rgb(217, 223, 228);">
                            <div class="contactus"><span style="color: rgb(4, 55, 150);  font-weight: bold;">Get in touch</span><br><br>+911234567890<br>esaywayservices04@gmail.com</div>
                            <div class="copywrite">Copyrights © Company All Rights Reserved</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
        </body>
        </html>` // html body
    });

    if(info){
        console.log("Mail send", info);
        return "Successfull";
    }
    else{
        console.log("Unable to send mail!", info);
        return "Unsuccessfull";
    }  
};

module.exports = sendMail;