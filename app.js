let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

let generadorDominio = (pronoun, adj, noun) => {

 for (let a in pronoun) {
    
   for (let b in adj) {
      
    for (let c in noun) {
        
      let dominio = pronoun[a]+adj[b]+noun[c]+".com"
      console.log(dominio) 
    }
  }
}
}

console.log(generadorDominio(pronoun,adj,noun))
