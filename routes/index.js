var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Troika Idiomas' });
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Troika Idiomas' });
});

router.get('/cursos', function(req, res, next) {
  res.render('cursos', { title: 'Troika Idiomas' });
});

router.get('/russo_ead', function(req, res, next) {
  res.render('curso_EAD', { title: 'Troika Idiomas' });
});

router.get('/ingles_online', function(req, res, next) {
  res.render('ingles_online', { title: 'Troika Idiomas' });
});

router.get('/intercambio', function(req, res, next) {
  res.render('intercambio', { title: 'Troika Idiomas' });
});

router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Troika Idiomas' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Troika Idiomas' });
});

router.get('/material', function(req, res, next) {
  res.render('material', { title: 'Troika Idiomas' });
});

router.get('/russo_nativo', function(req, res, next) {
  res.render('russo_nativo', { title: 'Troika Idiomas' });
});


router.post('/send', (req, res) => {
  const output = `
    <p>Você tem um novo Email</p>
    <h3>Detalhes</h3>
    <ul>  
      <li>Nome: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Assunto: ${req.body.subject}</li>
    </ul>
    <h3>Mensagem</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.domain.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'suporte@troikaidiomas.com', // generated ethereal user
        pass: 'Troikaidiomas12!@'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '<suporte@troikaidiomas.com>', // sender address
      to: 'flavioandrade0201@gmail.com, linkdimitri@gmail.com', // list of receivers
      subject: req.body.subject, // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contato', {msg:'O EMAIL FOI ENVIADO COM SUCESSO'});
  });
  });
 

module.exports = router;
