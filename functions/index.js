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
const admin = require("firebase");

var firebaseConfig = {
    apiKey: "AIzaSyBBuGV1dEsO79Fz4rLZgdHicSPPcwgxjl8",
    authDomain: "proyectoweb-67fae.firebaseapp.com",
    databaseURL: "https://proyectoweb-67fae.firebaseio.com",
    projectId: "proyectoweb-67fae",
    storageBucket: "proyectoweb-67fae.appspot.com",
    messagingSenderId: "143404945456",
    appId: "1:143404945456:web:4f7ce2494eb3a6d36b9df5",
    measurementId: "G-X12CFKXDG5"
};

firebase.initializeApp(firebaseConfig);

const app = express();
admin.initializeApp();

app.get('/functions', (req, res) => {
    var consulta;
    const db = firebase.database();
    db.ref("/usuarios").on("value", data => {
        consulta = data.toJSON();
    });

    res.send(consulta)
});

exports.app = functions.https.onRequest(app);