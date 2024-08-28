const nodemailer = require('nodemailer');
const multer = require('multer');
const express = require("express")
const { google } = require('googleapis');
const path = require('path');
const router = express.Router()


const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });

  async function sendMail(to, subject, text, file) {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
  
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL,
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken.token,
        },
      });

      const mailOptions = {
        from: `SENDER NAME <${process.env.EMAIL}>`,
        to: to,
        subject: subject,
        text: text,
        attachments: [
          {
            filename: file.originalname,
            path: file.path,
            contentType: 'application/pdf',
          },
        ],
      };
  
      
    const result = await transporter.sendMail(mailOptions);

    // Delete file after sending email
    fs.unlinkSync(file.path);

    return result;
  } catch (error) {
    return error;
  }
}

router.post('/', upload.single('file'), async (req, res) => {
  const { to, subject, text } = req.body;
  const file = req.file;

  try {
    const result = await sendMail(to, subject, text, file);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


module.exports = router;