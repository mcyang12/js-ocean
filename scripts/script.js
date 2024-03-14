//Task 1: Implement a function that calculates total fish caught


function calculateFishCaught(totalFish){
    let total = 0;
    totalFish.forEach(fishQuantity => {
        total += fishQuantity; 
        //0 += 50 <- 50 is the new total
        //50 += 75 <- 125 is the new total
        //125 += 25 <- 150 is the new total
    } )
    return total;
};

let weekendFishCaught = [50, 75, 25];
let weekdayFishCaught = [100, 60, 40, 100];
let totalWeekendFishCaught = calculateFishCaught(weekendFishCaught);
console.log("Total weekend fish caught:", totalWeekendFishCaught);

//Task 2: Implement a function to filter out endangered species from a list of fish options
function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered)
}

let fishOptions = [
    {name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
]

//Task 3: Define a class for Research Institutes

class ResearchInstitute{
    constructor(name, location, specialty, size){
        this.name = name;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

//Task 4: Extend the ResearchInstitute class for Marine ReasearchInstitute
class MarineReachInstitute extends ResearchInstitute{
    constructor(instituteName, location, specialty, size, waterLocationParam, climate){
        super(instituteName, location, specialty, size)
        this.waterLocation = waterLocationParam;
        this.climate = climate;
    }
}

//Task 5: Implement a class with default parameters for Oceanic Dive Gear

class OceanicDiveGear{
    constructor(depth = "Deep Sea", type = "Scuba"){
        this.depth = depth;
        this.type = type;
    }
}

let diveGear = new OceanicDiveGear();
//this would create an object like so
// {
   // depth: "Deep Sea",
    //type: "Scuba"
//}