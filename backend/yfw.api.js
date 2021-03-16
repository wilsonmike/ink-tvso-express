const express = require("express");
const yfw = express.Router();
const pool = require("./connection");

//api routes including pg data

//TVSO Data
yfw.get('/amazon', function(req,res) {
    let query = `select * from amazon`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/etsysugarplum', function(req,res) {
    let query = `select * from etsysugarplum`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/tvso', function(req,res) {
    let query = `select * from tvso`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
yfw.get('/manualorders', function(req,res) {
    let query = `select * from manualorders`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

//UCS Data
yfw.get('/ucs', function(req,res) {
    let query = `select * from ucs`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

//costume data
yfw.get('/maskmarket', function(req,res) {
    let query = `select * from maskmarket`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

yfw.get('/amazonfeb', function(req,res) {
    let query = `select * from amazonfeb`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
yfw.get('/etsyfeb', function(req,res) {
    let query = `select * from etsyfeb`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
yfw.get('/ucsfeb', function(req,res) {
    let query = `select * from ucsfeb`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
yfw.get('/maskmarketfeb', function(req,res) {
    let query = `select * from maskmarketfeb`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})
// dirt.get('/', function(req,res) {
//     let query = `select * from tdlshippedorders`;
//     pool.query(query).then((response) => {
//         res.json(response.rows); 
//     })
// })

// dirt.get('/lineitems', function(req,res) {
//     let query = `select * from tdlitembyline`;
//     pool.query(query).then((response) => {
//         res.json(response.rows); 
//     })
// })

// dirt.get('/feborders', function(req,res) {
//     let query = `select * from tdlFebShipping`;
//     pool.query(query).then((response) => {
//         res.json(response.rows); 
//     })
// })

// ship.get('/shipments', function(req,res) {
//     return res.json(shipments);
// })

// ship.get('/lineitems', (req,res) => {
//     let query = `select * from fbtable`;
//     pool.query(query).then((response) => {
//         res.json(response.rows);
//         // console.log(response.rows);
//     })
// })

module.exports = yfw; 