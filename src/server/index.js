import express from "express"
import memberRouter from "./routers/member.router.js"

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

//app.use(express.json())
app.disable('x-powered-by')
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use('/v1', memberRouter)

app.get('/', (req, res) => {
  res.render('base/base', {title: 'bienvenido'})
})
app.use(express.static(`${__dirname}/../public`))

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
