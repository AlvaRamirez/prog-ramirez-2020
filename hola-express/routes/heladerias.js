const crudHeladerias = (app) =>{
    const Heladerias = require('../models/heladerias.js')
}

findAllCervecerias = (req,res)=> {
    Heladerias.find((err, heladerias)=>{
        if(!err){
            console.log('GET /cervecerias');
            res.send(heladerias)
        }
    })
}

export default crudHeladerias;