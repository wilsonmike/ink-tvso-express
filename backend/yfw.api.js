const express = require("express");
const yfw = express.Router();
const pool = require("./connection");

//api routes including pg data

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