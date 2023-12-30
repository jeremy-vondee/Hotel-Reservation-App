import express from "express"
import ViteExpress from "vite-express"
import multer from "multer"
import cors from "cors"
import dayjs from "dayjs"

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const upload = multer()

app.post("/api", upload.none(), (req, res) => {
    const { reservationDate, numberOfGuest } = req.body
    console.log(reservationDate)
    res.json({
        body: "Reservation successful",
    })
})

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
)
