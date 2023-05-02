const pulmonares = (req, res) => {
  res.render("afi/consonantes-pulmonares", {
    pagina: "Consonantes pulmonares",
    barra: true,
  });
};

const noPulmonares = (req, res) => {
  res.render("afi/consonantes-no-pulmonares", {
    pagina: "Consonantes no pulmonares",
    barra: true,
  });
};

export { pulmonares, noPulmonares };
