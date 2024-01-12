import express from "express"
import memberRouter from "./routers/member.router.js"

const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.use('/v1', memberRouter)

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
