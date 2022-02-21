let random = Math.random();
let randomTwo = random * 10;
let randomRound = Math.round(randomTwo);
let getalZomaar = randomRound;
let testArray = ['Sten', 'Wendy', 'Nore', 'Nell', 'Rien'];
const testObject = {
    naam: "Sten",
    achternaam: "Caers",
    leeftijd: getalZomaar,
    volledigeNaam() {
        return this.naam + " " + this.achternaam;
    }

}
let test;
test = 40; 


console.log(getalZomaar);
console.log(testObject);
console.log(testObject.leeftijd);
console.log(testObject.volledigeNaam());
console.log(test);


var dataset = job.getDataset("jdf");
var sheetcount = dataset.evalToNumber("count(/jdf:JDF/jdf:JDF)");
var sheetnums = [];
for (var sheet = 1; sheet <= sheetcount; sheet++) {
	var xpath = "/jdf:JDF/jdf:JDF[" + sheet + "]/@DescriptiveName"
	var name = dataset.evalToString( xpath );
	sheetnums.push( parseInt( name ) );
}
sheetnums.join("|") + "|#";

let testBacktik = ‘Sten say hello $‘