import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let adj = ['sassy', 'bizarre', 'cranky', 'juicy', 'zesty'];
  let obj = ['pickle', 'llama', 'sock', 'donut', 'umbrella'];
  let random = ['quest', 'jam', 'zone', 'frenzy', 'circus'];

  const domainNames = [];
  for (let adjIndex = 0; adjIndex < adj.length; adjIndex++){
    const domainAdj = adj[adjIndex]; 
    for (let objIndex = 0; objIndex < obj.length; objIndex++){
      const domainObj = obj[objIndex];
      for (let randomIndex = 0; randomIndex < random.length; randomIndex++){
        const domainRandom = random[randomIndex]; 
        const domainName = domainAdj + domainObj + domainRandom;
        domainNames.push(domainName);
      }
    }
  }
  console.log("Here's a list of domain names:");
  for (let i = 0; i < domainNames.length; i++) {
    console.log(domainNames[i] + '.com');
  }
};
