const express = require("express"); 
const morgan = require("morgan");   

const app = express();
app.set("port", 4001);

app.use(morgan("dev"));
app.use(express.json());

const productsRoutes = require('./routes/products.routes');
app.use("/products", productsRoutes);

app.listen(app.get("port"));
console.log("Escuchando el puerto " + app.get("port"));