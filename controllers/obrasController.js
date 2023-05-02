const obras = (req, res) => {
  res.render("obras/obras", {
    pagina: "Obras",
    barra: true,
  });
};

export { obras };
