const home = (req, res) => {
  res.render("home/home", {
    pagina: "Esther Herrera Zendejas",
    barra: true,
  });
};

export { home };
