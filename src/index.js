import express from 'express'

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(express.static( __dirname + '/public'))

app.listen("3000")

console.log(__dirname)
console.log("listening port 3000")