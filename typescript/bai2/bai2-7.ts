class animal{
    name:string;
    constructor(theName: string){
        this.name = theName;
    }

    move(distanceInMeters: number = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.` );
    }
}

class snake extends animal{
    constructor(name: string){
        super(name);
    }

    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let sam = new snake("Sammy the Python");
sam.move();





class hinhChuNhat{
    action:string;
    constructor(theAction: string){
        this.action = theAction;
    }

    chieuDai(distanceInMeters: number = 0){
        console.log(`${this.action} đo ${distanceInMeters}cm.` );
    }

    chieuRong(distanceInMeters: number = 0){
        console.log(`${this.action} đo ${distanceInMeters}cm.` );
    }
}

class khoiTao extends hinhChuNhat{
    constructor(action: string){
        super(action);
    }

    chieuDai(distanceInMeters = 9){
        console.log("Chiều dài: ");
        super.chieuDai(distanceInMeters);
    }

    chieuRong(distanceInMeters = 6){
        console.log("Chiều rộng: ");
        super.chieuRong(distanceInMeters);
    }
}

let h1 = new khoiTao("hình chữ nhật 1");
h1.chieuDai();
h1.chieuRong();
