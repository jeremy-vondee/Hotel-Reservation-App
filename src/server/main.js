import express from "express"
import ViteExpress from "vite-express"
import multer from "multer"
import cors from "cors"

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const upload = multer()

app.post("/api", upload.none(), (req, res) => {
    const { checkInDate, checkOutDate, numberOfGuest } = req.body
    res.send({
        body: {
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            numberOfGuest: numberOfGuest,
            message: checkInDate,
        },
    })
    console.log(checkInDate, checkOutDate, numberOfGuest)
})

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
)
