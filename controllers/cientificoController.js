module.exports = {


    get: (req, res) => {
    
    
       res.status(202).render("cientifico-y-forense")
    
    },

    getAnalisisPigmen:(req,res)=>  {

        res.status(202).render("analisis-de-pigmentos")
    },

getAnalisisPapel:(req,res)=>  {

    res.status(202).render("analisis-del-papel")
},

getDatMetales:(req,res)=> {

    res.status(202).render("datacion-por-metales")
},

getEspeciesMadera:(req,res)=> {

    res.status(202).render("especies-de-madera")
},
getDatacion:(req,res)=> {

res.status(202).render("datacion")},


getDataCarbo: (req,res)=> { 

    res.status(202).render("datacion-por-carbono")
}, 
getEstudiosFore:(req,res)=> {

    res.status(202).render("estudios-forenses")
},
getFirma:(req,res)=> {

    res.status(202).render("firma")
},
getFirmaCali: (req,res)=>{

    res.status(202).render("firma-y-caligrafia")
},
getFotoEsp: (req,res)=>{

    res.status(202).render("fotografia-especial")
},
getLinguistica: (req,res)=>{

    res.status(202).render("linguistica-forense")
},
getMontajeBasti: (req,res)=>{

    res.status(202).render("montaje-de-bastidores")
},
getPaneles: (req,res)=>{

    res.status(202).render("paneles")
},
getPruebasCientificas: (req,res)=>{

    res.status(202).render("pruebas-cientificas")
},
getRayosX: (req,res)=>{

    res.status(202).render("rayos-x")
},
getSellos: (req,res)=>{

    res.status(202).render("sellos")
},
getSellosEtiquetas: (req,res)=>{

    res.status(202).render("sellos-y-etiquetas")
},
getSobreDatacion: (req,res)=>{

    res.status(202).render("sobre-la-datacion")
},
getTermo: (req,res)=>{

    res.status(202).render("sobre-la-termoluminiscencia")
},
getTablas: (req,res)=>{

    res.status(202).render("tablas")
},
getTachuelas: (req,res)=>{

    res.status(202).render("tachuelas")
}

    }


