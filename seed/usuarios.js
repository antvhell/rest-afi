import bcrypt from "bcrypt";

const usuarios = [
  {
    nombre: "Luis",
    email: "luis@correo.com",
    confirmado: 1,
    password: bcrypt.hashSync("password", 10),
  },
  {
    nombre: "antonio",
    email: "antonio@correo.com",
    confirmado: 1,
    password: bcrypt.hashSync("password", 10),
  },
];

export default usuarios;
