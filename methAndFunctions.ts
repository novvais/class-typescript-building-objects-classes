class Car {
  on = false;
  acceleration = 0

  constructor(
    public color: string,
    public model: string,
    public brand: string,
    public year: number,
    public hp: number
  ) {}

  turnOn() {
    if (!this.on) {
        this.on = true;
    }
  }

  accelerate(rpm: number) {
    this.acceleration += rpm
  }

  brake() {
    this.acceleration = 0
  }

  carStatus(): string {
    if (this.on) {
        return "the car is running"
    }

    return "the car is switched off"
  }
}

const car = new Car("Preto", "Fusca", "Volkswagen", 1970, 90)
car.turnOn()
car.accelerate(1000)
car.brake()
car.carStatus()

console.log();
