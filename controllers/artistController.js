const db = require("../database/models");
const Op = db.Sequelize.Op;


module.exports = {
    get: async(req, res) => { 
        
        const artists = await db.Artist.findAll()
        res.send(artists) },

    getOne: async(req, res) => { 
        const id = req.params.id
        const artist =  await db.Artist.findByPk(id);
        if(!artist) {res.send("no hay artista")}       
        res.send(artist) }, 
        search: async (req, res) => {

            const artists = await db.Artist.findAll({               
                where:  {name:{[Op.like]:`%${req.query.q}%`}}
                });
             res.send(artists)
        }
}


