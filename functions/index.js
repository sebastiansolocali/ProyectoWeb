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
const firebase = require("firebase");
const cors = require("cors");

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
app.use(express.json());
app.use(cors());

// ------------------ HOME LIST
app.post("/functions/homelist", (req, res) => {

  var search;

  console.log("functions")
  console.log(req.body);
  console.log(req.body.username);

  firebase
    .database()
    .ref(`/usuarios/${req.body.username}/rooms`)
    .on("value", data => {
      search = data;
    });

    console.log(`Se cosultó HomeList sobre ${req.body.username}`);
    res.send(search);
});

// ------------------ GET
app.get("/functions/:user", (req, res) => {
  var consulta;

  firebase
    .database()
    .ref(`/usuarios/${req.params.user}`)
    .on("value", data => {
      consulta = data;
    });
  console.log(`Se cosultó sobre ${req.params.user}`);
  res.send(consulta);
});

// ------------------ POST
app.post("/functions", (req, res) => {
  firebase
    .database()
    .ref(`/usuarios/${req.body.username}`)
    .set({
      name: req.body.name,
      password: req.body.password
    });

  console.log(`Se inserto ${req.body.username}`);
  res.send(`Se insertó ${req.body.username}`);
});

// ------------------ UPDATE
app.put("/functions", (req, res) => {
  var updates = {};

  if (req.body.newPassword !== undefined) {
    console.log(`Contraseña: ${req.body.newPassword}`);
    updates[`/usuarios/${req.body.username}/password`] = req.body.newPassword;
  }
  if (req.body.newName !== undefined) {
    console.log(`Name: ${req.body.newName}`);
    updates[`/usuarios/${req.body.username}/name`] = req.body.newName;
  }

  firebase
    .database()
    .ref()
    .update(updates);

  console.log(`Se modificó ${req.body.username}`);
  res.send(`Se modificó ${req.body.username}`);
});

exports.app = functions.https.onRequest(app);
