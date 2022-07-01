const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');

const CarsModel = require('./car');
var router = express.Router();

app.use(express.json());
app.use(cors())
app.use(router)

mongoose.connect("mongodb://localhost:27017", {
    useNewUrlParser: true
})

const conSuccess = mongoose.connection
conSuccess.once('open',_ =>{
    console.log('Database Connected');
})

router.route('/addCar').post(async(req, res) => {
    const name = req.body.name;
    const detail = req.body.detail;
    const price = req.body.price;
    //const detail = new UserModel(user);
    const newCar = new CarsModel({name: name, detail: detail, price: price});
    await newCar.save();

    res.json({msg: 'Success'});
})

router.route('/getCar').get(async(req, res) => {
    CarsModel.find({}, (err, result) => {
        if (err) {
          res.json(err);
        } 
        else {
          res.json(result);
        }
      });
});

app.get('/', (req, res) => {
    console.log('wxyz');
});

app.listen('3001', ()=>{
    console.log('Server running at port 3001');
})






// app.post('/createUser', async(req, res) => {
//     const name = req.body.name;
//     const detail = req.body.detail;
//     const price = req.body.price;
//     //const detail = new UserModel(user);
//     const newCar = new CarsModel({name: name, detail: detail, price: price})
//     await newCar.save();

//     res.join({msg: 'Success'});
// });

// app.get("/getCar", (req, res) => {
//     CarsModel.find({}, (err, result) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     });
//   });