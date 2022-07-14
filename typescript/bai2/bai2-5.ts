// mảng đối tượng
let bookChildren: any[]=[
    {name:"bu bu tè dầm", type:"thiếu nhi", price: 15000},
    {name:"bu bu tập đi xe đạp", type:"thiếu nhi", price: 15000},
    {name:"bu bu nhận lỗi", type:"thiếu nhi", price: 15000},
]
console.log("book children is: "+ bookChildren);
for(var i = 0; i < bookChildren.length; i++)
{
    console.log(bookChildren[i]);
}




class bookAldult{
    nameBook: string;
    typeBook: string;
    priceBook: number;
    constructor(nameBook: string, typeBook: string, priceBook: number)
    {
        this.nameBook = nameBook;
        this.typeBook = typeBook;
        this.priceBook = priceBook;
    }
    getNameBook(): string{
        return this.nameBook;
    }
    setNameBook(nameBook){
        this.nameBook = nameBook;
    }
    getTypeBook(): string{
        return this.typeBook;
    }
    setTypeBook(typeBook){
        this.typeBook = typeBook;
    }
    getPriceBook():number{
        return this.priceBook
    }
}
var b:bookAldult = new bookAldult("Sống và khác vọng", "kỹ năng sống", 130000);
var b1:bookAldult = new bookAldult("Đắc nhân tâm", "kỹ năng sống", 100000);
var b2:bookAldult = new bookAldult("Trông đẹp là lợi thế sống đẹp là bản lĩnh", "phụ nữ", 150000);

let bookAldults: Array<bookAldult>=[b,b1,b2];
var str:string="";

for(var i = 0; i < bookAldults.length; i++)
{
    str+=bookAldults[i].getNameBook()+" "+bookAldults[i].getTypeBook()+" "+bookAldults[i].getPriceBook();
    str+=`\n`;
}
document.body.textContent = str;