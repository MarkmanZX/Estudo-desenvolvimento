const express = require('express');
const app = express();
const port = 3000;
const router = require("./routers/index");

router(app);

app.listen(3000, (error) => {
    if (error) {
        console.log("Deu erro");
        return;
    }
    console.log("rodando que é uma belezinha...");
});