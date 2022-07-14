class HinhChuNhat{
    dai: number;
    rong: number;
    constructor(d:number, r:number){
        this.dai = d;
        this.rong = r;
    }
    dienTich():number{
        return this.dai*this.rong;
    }
    chuVi():number{
        return (this.dai+this.rong)*2;
    }
}
var str:string="  ";
var h2:HinhChuNhat = new HinhChuNhat(3,6);
str+="diện tích ="+h2.dienTich()+" chu vi = "+h2.chuVi();
document.body.textContent=str;

class HinhHopChuNhat extends HinhChuNhat{
    cao:number;
    constructor(dai:number, rong:number, cao:number){
        super(dai,rong);
        this.cao=cao;
    }
    theTich():number{
        return this.cao*super.dienTich();
    }
    dienTich(): number {
        return 2*super.dienTich()+super.chuVi()*this.cao;
    }
}
var h1:HinhHopChuNhat = new HinhHopChuNhat(3,6,9);
str+="diện tích ="+h1.dienTich()+" thể tích = "+h1.theTich();
document.body.textContent=str;