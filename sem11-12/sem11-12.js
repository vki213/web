let city1 = new Object();
    city1.name="городN"
    city1.population=10000000;
 
    city1.getName = function()
      {
          return this.name;
      }       
console.log(city1.getName());
 
    city1.exportStr = function()
      {
        let name = this.name;
        let population = this.population;
        let information = "name: " + name + ", population: " + population + "\n";
        return information;
      }       
console.log(city1.exportStr());
 
//Second City
let city2 = new Object() 
    city2 = 
      {
        name: "городM",
        population: 1e6,
      };
 
    city2.getName = function()
      {
          return this.name;
      }       
 
console.log(city2.getName());
 
    city2.exportStr = function()
      {
        let name = this.name;
        let population = this.population;
        let information = "name: " + name + ", population: " + population + "\n";
        return information;
      }
console.log(city2.exportStr());
