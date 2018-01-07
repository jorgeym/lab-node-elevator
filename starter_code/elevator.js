let Person = require('./person.js');
let person = new Person();

class Elevator {
  constructor(){
    this.floor      = 1;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.floorsToServe = [];
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
  _passengersEnter() { }
  _passengersLeave() { }

  floorUp() {
    if (this.direction === "up" && this.floor < this.MAXFLOOR) {
      this.floor++;
      console.log(this.floor);
    } else {
      console.log(`The elevator cannot go higher than floor 10`);
    }
  }

  floorDown() {
    if (this.direction === "down" && this.floor > 0) {
      this.floor--;
      console.log(this.floor);
    } else {
      console.log(`The elevator cannot go lower than floor 0`);
      // warning: if direction is differente from down, the error message displayed will be wrong
    }
  }

  call() {
    this.requests.push(person);
    console.log(this.requests);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

var myElevator =new Elevator();
myElevator.call();
module.exports = Elevator;
