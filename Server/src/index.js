const express = require("express");
const server = express();
const router = require("./routes/index");
const morgan = require("morgan");
const PORT = 3001;
const { conn } = require("./DB_connection");

server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

async function startServer() {
  try {
    // Sincroniza Sequelize con la base de datos
    await conn.sync();

    // Usa el router
    server.use("/rickandmorty", router);

    // Levanta el servidor
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
  }
}

startServer();
