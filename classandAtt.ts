export class Car {
  color: string = "Preto";
  brand: string = "Volkswagen";
  model: string = "Fusca"
  year: Number = 1970
  hp: number = 90
}

const car =  new Car()
car.color = "Cinza"

console.log(car)
