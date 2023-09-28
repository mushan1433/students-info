const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))



const students = [
    {
        name: "Hamim",
        age: 23,
        hobby: "reading"
    },
    {
        name: "Mushan",
        age: 24,
        hobby: "riding"
    },
    {
        name: "Ridoy",
        age: 24,
        hobby: "travelling"
    },
    {
        name: "John Doe",
        age: 30,
        hobby: "cricket"
    },
    {
        name: "Alex Smith",
        age: 28,
        hobby: "football"
    }
]
app.get("/get-students", async (req, res) => {
    try {
        res.status(200).json(students)
    } catch (err) {
        res.status(500).json(err)
    }
})


app.listen(4000, () => console.log("backend running"))