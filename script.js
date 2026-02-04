const container = document.getElementById("app");

ellatasok.forEach(elem => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.innerText = elem.cim;

  card.appendChild(title);

  elem.szoveg.forEach(sor => {
    const p = document.createElement("p");
    p.innerText = sor;
    card.appendChild(p);
  });

  container.appendChild(card);
});
