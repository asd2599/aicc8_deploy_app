// 1. express
// 2. cors
const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();


app.use(cors()); // 크로스 오리진 설정
app.use(express.json()); // json data parsing

// 3. root 설정
app.get("/", (request, response) => {
    response.send("This is the main App for deployment");
});
// 4. listen 설정
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});





