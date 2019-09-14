const bodyParser = require("body-parser");
const express = require("express");
const api = express();

/*
    CORS (CROSS ORIGIN RESOURCE SHARING) - måste användas då vår hemsida är på en helt annat port eller adress än vårt api
 */
api.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();
})

/*
    ROUTES - vägar till de olika delarna i apiet, såsom products, orders, users etc.
*/

// http://localhost:9999/api/products
const productRoute = require("./routes/products.js");
api.use("/api/products", productRoute);

// // http://localhost:9999/api/orders
// const orderRoute = require("./routes/orders.js");
// api.use("/api/orders", orderRoute);

module.exports = api;