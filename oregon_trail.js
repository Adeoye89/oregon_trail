function Traveler(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
};


function Wagon(capacity) {
    this.capacity = capacity;
    this.passenger = [];
} ;


Traveler.prototype.hunt = function () {
    this.food = this.food + 2;
}; 


Traveler.prototype.eat = function ()  {

     if (this.food > 0) {

        this.food = this.food - 1

     }
    else {
        this.isHealthy = false
    }
    
};


Wagon.prototype.getAvailableSeatCount =  function() {

    return this.capacity - this.passenger.length;
};


Wagon.prototype.join = function (Traveler) {
    
    
    if (this.capacity > this.passenger.length) 

    { this.passenger.push (Traveler);

    }
    else { console.log ("Do Not add")

    }

};


Wagon.prototype.shouldQuarantine = function() {
    for (let i =0 ; 1 < this.passenger.length; i++)
    { 
        if (this.passenger[i].isHealthy === false) {
        return true 
        }
    } 
    return false
 };


 Wagon.prototype.totalFood = function () { 
      
    let food = 0 
    for ( i=0; i < this.passenger.length; i++){
        food = food + this.passenger[i].food
    }
        return food

};


// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);