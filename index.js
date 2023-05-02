import express from "express";
import csrf from "csurf";
import cookieParser from "cookie-parser";

import usuarioRoute from "./routes/usuarioRoutes.js";
import propiedadesRoutes from "./routes/propiedadesRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import afiRoutes from "./routes/afiRoutes.js";
import foneticaRoutes from "./routes/foneticaRoutes.js";
import acusticaRoutes from "./routes/acusticaRoutes.js";
import obrasRoutes from "./routes/obrasRoutes.js";

import db from "./config/db.js";
//Crear la app
const app = express();

// Habilitar lectura de datos de formularios
app.use(express.urlencoded({ extended: true }));

// Habilitar Cookie Parser
app.use(cookieParser());

// Habilitar CSRF
app.use(csrf({ cookie: true }));

// Conexion a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexion correcta a la Base de datos");
} catch (error) {
  console.log(error);
}

// Habilitar Pug
app.set("view engine", "pug");
app.set("views", "./views");

//Carpeta pública
app.use(express.static("public"));

//Routing
app.use("/auth", usuarioRoute);
app.use("/", propiedadesRoutes);
app.use("/", homeRoutes);
app.use("/afi", afiRoutes);
app.use("/fonetica-articulatoria", foneticaRoutes);
app.use("/", acusticaRoutes);
app.use("/", obrasRoutes);

//Definir un puerto y arrancar el proyecto
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
