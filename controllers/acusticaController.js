const acustica = (req, res) => {
  res.render("acustica/acustica", {
    pagina: "Acústica",
    barra: true,
  });
};

export { acustica };
