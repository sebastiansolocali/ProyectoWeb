// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//
// URL: https://us-central1-proyectoweb-67fae.cloudfunctions.net/app

const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

const app = express();
admin.initializeApp();

app.get('/functions', (req, res) => {
    res.send("hola con express desde firebase cloud functions")
});

exports.app = functions.https.onRequest(app);