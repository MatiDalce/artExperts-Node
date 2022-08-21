const nodemailer = require('nodemailer')
const db = require("../database/models");
const Op = db.Sequelize.Op;
const path = require('path');
module.exports = { 
    get: (req,res) =>{ res.render("contact") },

    post :async (req,res) => { 

      console.log(req.body.imagenes)
      console.log(req.body.name)
      console.log(req.body.email)

      res.redirect('/')


           
        const transporter =  nodemailer.createTransport({
            service: 'personaimportante2022@gmail.com',
            auth: {
                user: 'personaimportante2022@gmail.com',
                pass: 'dbyp vdsy kjqw ykwy'
            }
        });
          let mailOptions = {
            from: "Artexperts", 
            to: "matiasdalceggio@gmail.com", 
            subject: "Artexperts", 
           html: `<h1>Consulta de ${req.body.name} .</h1><h2>Nombre : ${req.body.name}</h2> <h2>Mail: ${req.body.email} </h2><h3> ${req.body.text} </h3>`,
            attachments:[
              {
                fileName: req.body.email + ".jpg",
                path: path.join(__dirname, '../public/files/'+ req.body.email + ".jpg"),
                content: "img"
              }
            ]     
          };

        transporter.sendMail(mailOptions) },
        
        getSucces: async(req,res)=> {}} 