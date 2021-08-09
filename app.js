let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let comb1 = []
let comb2 = []
let comb3 = []

 for (let a in pronoun) {
    
   for (let b in adj) {
      
    for (let c in noun) {
        
      let dominio = pronoun[a]+adj[b]+noun[c]+".com"
      console.log(dominio)
        
    }
  }
}
