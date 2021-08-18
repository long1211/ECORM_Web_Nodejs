const express = require("express")
const app = express();
const port = 4000;
const AdminRoutes = require("./routes/Admin.routes")

app.use("/admin", AdminRoutes)

app.listen(port, () => {
    console.log(`Server listening ${port}`)
})