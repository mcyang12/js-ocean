//Task 1: Implement a function that calculates total fish caught
//(MY) creating a function to calculate fish caught using totalFish as the variable//
//(MY) using a for loop we are to determine the total fish quantity//

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

//(MY) by console.log the total fish caught, we will be able to run the code//

//Task 2: Implement a function to filter out endangered species from a list of fish options
function filterEndangeredFish(fishOptions){
    return fishOptions.filter(option => !option.endangered)
}

let fishOptions = [
    {name: "Salmon", endangered: false},
    {name: "Bluefin Tuna", endangered: true},
    {name: "Cod", endangered: false}
]

//(MY) In task 2, need to filter out the endangered fish. By doing so, we need to filter out every option using a boolean method.//
//(MY) Function the variable of the elements.//
//(MY) Returning the iterator that is already filtered.//
//(MY) Using the boolean method, to filter out the fishOptions if the statement is true or false.//


//Task 3: Define a class for Research Institutes

class ResearchInstitute{
    constructor(name, location, specialty, size){
        this.name = name;
        this.location = location;
        this.specialty = specialty;
        this.size = size;
    }
}

//(MY) Using class and defining Research Institue.//
//(MY) Along with the constructor method which will define and describe the objects of the class.//

//Task 4: Extend the ResearchInstitute class for Marine ReasearchInstitute
class MarineReachInstitute extends ResearchInstitute{
    constructor(instituteName, location, specialty, size, waterLocationParam, climate){
        super(instituteName, location, specialty, size)
        this.waterLocation = waterLocationParam;
        this.climate = climate;
    }
}

//(MY) This is similar to defining a class, but includes the other options available.//
//(MY) Extending the class with the secondary option.//
//(MY) Constructor the main function and second corresponding options.//
//(MY) Super is added for the corresponding options or subclasses.//

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

//(MY) Adding default values to the class param properties.//
//(MY) Declaring the object for the argument.//