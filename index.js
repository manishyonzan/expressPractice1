const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.json({
        message: "hello world",
    });
});


;
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`${PORT}`);
})

