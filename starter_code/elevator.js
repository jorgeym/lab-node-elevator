class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "up";
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
  floorUp() { }
  floorDown() { }
  call() { }
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`)
  }
}

var myElevator =new Elevator();
myElevator.start();
myElevator.stop();
module.exports = Elevator;
