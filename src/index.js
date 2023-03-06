console.log("Webpack is working!")

const MovingObject = require("./moving_object.js")
window.movingObject = MovingObject;


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
window.ctx = ctx;