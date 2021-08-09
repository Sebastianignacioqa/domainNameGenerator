let generarDominio = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let ipronoun = Math.floor(Math.random() * pronoun.length);
  let iadj = Math.floor(Math.random() * adj.length);
  let inoun = Math.floor(Math.random() * noun.length);

  return pronoun[ipronoun]+adj[iadj]+noun[inoun]+".com";
};


console.log(generarDominio())
