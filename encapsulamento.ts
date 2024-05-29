class Person {
    name: string
    nickname: string
    age: number

    private speed = 0

    constructor(name: string, nickname: string,  age: number) { 
        this.name = name
        this.nickname = nickname
        this.age = age
    }

    private nameComplete(): string {
        return `${this.name}${this.nickname}`
    }

    public walk() {
        this.speed += 1
    }

    public get getAge(): number {
        return this.age
    }

    public set setAge(age: number) {
        this.age = age
    }
}

const eduardo = new Person("Eduardo", "Novais", 20)

eduardo.getAge 
eduardo.setAge = 21 

console.log(eduardo)
