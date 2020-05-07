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

//GET - Get all registers from the DB
findAllPeliculas = (req, res) => {

    Heladeria.find((err, heladerias) => {
    
    if (!err) {
    
    console.log('GET /heladerias')
    
    res.send(heladerias);
    
    } else {
    
    console.log('ERROR: ' + err);
    
    }
    
    });
    
    };
    
    
    
    //POST - Insert a new register in the DB
    addHeladeria = function (req, res) {
    
    console.log('POST');
    
    console.log(req.body);
    
    
    
    var heladeria = new Heladeria({
    
    id: req.body.id,
    
    slug: req.body.slug,
    
    nombre: req.body.nombre,
    
    lanzamiento: req.body.lanzamiento,
    
    cover: req.body.cover,
    
    actores: req.body.actores
    
    });
    
    
    
    heladeria.save(function (err) {
    
    if (!err) {
    
    console.log('Created');
    
    } else {
    
    console.log('ERROR: ' + err);
    
    }
    
    });
    
    
    
    res.send(heladeria);
    
    };
    
    
    
    //PUT - Update a register already exists in the DB
    modificarPeliculas = function (req, res) {
    
    heladeria.findById(req.params.id, function (err, heladeria) {
    
        heladeria.id = req.body.id;
    
        heladeria.slug = req.body.slug;
    
        heladeria.nombre = req.body.nombre;
    
        heladeria.lanzamiento = req.body.lanzamiento;
    
        heladeria.cover = req.body.cover;
    
        heladeria.actores = req.body.actores;
    
        heladeria.save(function (err) {
    
    if (!err) {
    
    console.log('Updated');
    
    } else {
    
    console.log('ERROR: ' + err);
    
    }
    
    res.send(heladeria);
    
    });
    
    });
    
    }
    
    
    
    
    
    //DELETE - Delete a register with specified ID
    deleteHeladeria = function (req, res) {
    
        Heladeria.findById(req.params.id, function (err, heladeria) {
    
            heladeria.remove(function (err) {
    
    if (!err) {
    
    console.log('Removed');
    
    } else {
    
    console.log('ERROR: ' + err);
    
    }
    
    res.send(heladeria);
    
    })
    
    });
    
    }
    
    
    
    //Rutas de la API, asociadas a una función
    
    
    app.get('/heladerias', findAllHeladerias);
    
    app.post('/heladerias', addHeladeria);
    
    app.put('/heladerias/:id', modificarHeladerias);
    
    app.delete('/heladerias/:id', deleteHeladeria);