/**
 * @module fs
 * @module path
 * @module os
 */

const fs = require("fs");
const fsPromises = fs.promises;
const path = require('path');


const myData = "on veut nous tuer...";

/**
 * @param rep
 */

let fichier1 = "fichier1";
let fichier2 = "fichier2";
let EXTENSION = ".txt"
// creation du dossier temporaire
var rep = "MJ";

var dossier = fs.mkdtempSync(path.join("./", rep + '-'));

try {
  fs.appendFileSync("./" + dossier + "/" + fichier1 + EXTENSION, myData, "utf8");
  // copie du fichier1 au fichier2
  fs.copyFileSync("./" + dossier + "/" + fichier1 + EXTENSION, "./" + dossier + "/" + fichier2 + EXTENSION);

} catch (error) {
  console.error(error);
}