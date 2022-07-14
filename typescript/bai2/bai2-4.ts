
// Trong TypeScript chỉ cho dùng một phương thức khởi tạo trong 1 lớp
// các phương thức của lớp
class product{
    name: string;
    description: string;
    price: number;
    constructor(name: string, description: string, price: number)
    {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    getName(): string{
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getDescription(): string{
        return this.description;
    }
    setDescription(description){
        this.description = description;
    }
    getPrice():number{
        return this.price
    }
}
var phone :product = new product("iPhone 14","iPhone 14 sắp ra mắt",25000000);
var str:string="";
str+=phone.getName()+" "+phone.getDescription()+" "+phone.getPrice()
document.body.textContent = str;