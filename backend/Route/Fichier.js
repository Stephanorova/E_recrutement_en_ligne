const nodemailer = require('nodemailer');
const multer = require('multer');
// const {google} = require('googleapis');
const express = require("express")

const router = express.Router()

// Configurer multer pour le téléchargement de fichiers
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage });
  
  
  
  // Transporteur Nodemailer (utilisez vos propres informations de configuration)
  
  const ClientID = process.env.CLIENT_ID;
  const ClientScret= process.env.CLIENT_SECRET;
  const Url = process.env.URL;
  const Token = process.env.TOKEN;
  // const oAuth2client = new google.auth.oAuth2(ClientID, ClientScret, Url)
  // oAuth2client.setCredentials({refresh_token: Token})
  
  // const AccessToken = oAuth2client.getAccessToken()

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //       type:'oAuth2',
  //       user: 'rovaniainarakotozandry2@gmail.com',
  //       clientID: ClientID,
  //       ClientScret: ClientScret,
  //       refreshToken:Token,
  //       AccessToken: AccessToken

  //   }
  // });
  
  // Endpoint pour l'envoi d'e-mails
  router.post('/', upload.single('pdf'), (req, res) => { 
    const { to, subject, text } = req.body;
    const pdfPath = req.file.path;
  
    const mailOptions = {
      from: '<rovaniainarakotozandry2@gmail.com>', 
      to,
      subject,
      text,
      attachments: [
        {
          filename: req.file.originalname,
          path: pdfPath
        }
      ]
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  });

  module.exports = router;