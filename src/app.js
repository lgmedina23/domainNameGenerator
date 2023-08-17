import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his"];
  let adj = ["great", "big", "amazing"];
  let noun = ["jogger", "racoon", "fox"];
  let domain = [".net", ".com", ".org"];
  let HtmlDomain = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let h = 0; h < noun.length; h++) {
        for (let t = 0; t < domain.length; t++) {
          let element =
            "<li>" + pronoun[i] + adj[j] + noun[h] + domain[t] + "</li>";
          HtmlDomain += element;
        }
      }
    }
  }

  let miLista = document.querySelector("#dominios");

  miLista.innerHTML = HtmlDomain;
};
