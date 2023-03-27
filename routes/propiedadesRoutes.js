import express from "express";
import { body } from "express-validator";
import { admin, crear, guardar } from "../controllers/propiedadController.js";
import protegerRuta from "../middleware/protegerRuta.js";

const router = express.Router();

router.get("/mis-propiedades", protegerRuta, admin);
router.get("/propiedades/crear", protegerRuta, crear);
router.post(
  "/propiedades/crear",
  protegerRuta,
  body("titulo").notEmpty().withMessage("El Titulo del Anuncio es Obligatorio"),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripcion no puede ir vacia")
    .isLength({ max: 200 })
    .withMessage("La descripción es muy larga"),
  body("categoria").isNumeric().withMessage("Selecciona una categoría"),
  body("precio").isNumeric().withMessage("Selecciona una rango de Precios"),
  body("habitaciones")
    .isNumeric()
    .withMessage("Selecciona la cantidad de habitaciones"),
  body("estacionamiento")
    .isNumeric()
    .withMessage("Selecciona la cantidad de Estacionamientos"),
  body("wc").isNumeric().withMessage("Selecciona la cantidad de baños"),
  body("lat").isNumeric().withMessage("Ubica la propiedad en el mapa"),
  guardar
);

export default router;
