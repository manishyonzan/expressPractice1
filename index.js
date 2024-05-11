const express = require("express");

const app = express();
const loginRouter = require("./routes/login");
app.get("/", (req, res) => {

    res.json({
        message: "hello world",
    });
});
app.use("/test", loginRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT}`);
})

