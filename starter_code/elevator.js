let Person = require('./person.js');
let person = new Person("Juan", 0, 1);

class Elevator {
  constructor(){
    this.floor      = 1;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [person];
    this.direction = "down";
  }

  start() {
    this.interval = setInterval(() => {
      this.update();
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }

  _passengersEnter() {
    this.waitingList.forEach((person) => {
      //console.log(this.floor);
      if (person.originFloor === this.floor) {
        this.passengers.push(person);
        //console.log(this.passengers);
        //console.log(this.waitingList);
        let index = this.waitingList.indexOf(person);
        this.waitingList.splice(index,1);
        // console.log(this.waitingList);
        // console.log(this.requests);
        this.requests.push(person.destinationFloor);
        // console.log(this.requests);
        console.log(`${person.name} has entered the elevator`)
      }
    });
  }

  _passengersLeave() {
    this.passengers.forEach((person) => {
      if (person.destinationFloor === this.floor) {
        let index = this.passengers.indexOf(person);
        this.passengers.splice(index,1);
        // console.log(this.passengers);
        console.log(`${person.name} has left the elevator`)
      }
    });
  }

  floorUp() {
    if (this.direction === "up" && this.floor < this.MAXFLOOR) {
      this.floor++;
      // console.log(this.floor);
    } else {
      console.log(`The elevator cannot go higher than floor 10`);
    }
  }

  floorDown() {
    if (this.direction === "down" && this.floor > 0) {
      this.floor--;
      // console.log(this.floor);
    } else {
      console.log(`The elevator cannot go lower than floor 0`);
      // warning: if direction is differente from down, the error message displayed will be wrong
    }
  }

  call() {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

var myElevator =new Elevator();
myElevator.call();
myElevator._passengersEnter();
myElevator._passengersLeave();
module.exports = Elevator;
