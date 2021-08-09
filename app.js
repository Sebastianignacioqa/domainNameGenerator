let pronoun = ["the", "our","your"];
let adj = ["great", "big","awesome"];
let noun = ["jogger", "racoon","mouse"];

let generadorDominio = (pronoun, adj, noun) => {
let dominio = [];
 for (let a in pronoun) {
    
   for (let b in adj) {
      
    for (let c in noun) {
        
      dominio = pronoun[a]+adj[b]+noun[c]+".com";
      console.log(dominio)
    }
  }
}
return "No hay más dominios disponibles"
}

console.log(generadorDominio(pronoun,adj,noun))

