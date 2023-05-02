const FoneticaPulmonares = (req, res) => {
  res.render("fonetica-articulatoria/consonantes-pulmonares", {
    pagina: "Consonantes pulmonares",
    barra: true,
  });
};

const FoneticaNoPulmonares = (req, res) => {
  res.render("fonetica-articulatoria/consonantes-no-pulmonares", {
    pagina: "Consonantes no pulmonares",
    barra: true,
  });
};

export { FoneticaPulmonares, FoneticaNoPulmonares };
