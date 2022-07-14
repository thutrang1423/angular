//  public phạm vi truy xuất mặc định
class Animal{
    public name: string;

    public constructor(theName: string){
        this.name = theName;
    }

    public move(distanceInMeters: number){
        console.log(`${this.name} moved $ơ{distanceInMeters}m.`);
    }
}




class Animal1{
    private name: string;

    private constructor(theName: string){
        this.name = theName;
    }
}
let animal1 new Animal1 ("Cat");
animal1.name;
// error property 'name' is private and only accessible within class 'Animal1'



// protected cũng giống như private chỉ ngoại trừ trường hợp các class con kế thừa từ nó cũng có thể truy cập được
class Person{
    protected name: string;
    constructor(name: string){this.name = name; }
}

class Employee extends Person{
    private department: string;
    constructor(name:string, department: string){
        super(name);
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);//error do nằm ở bên ngoài




// readonly làm cho các thuộc tính chỉ đọc
// thuộc tính chỉ đọc phải được khởi tạo khi khai báo hoặc trong phương thức khởi tạo
class Octopus{
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string){
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-price suit";