interface LabeledValue {
    label: string;
    size: number;
}

function printLabel(labeledObj: LabeledValue){
    console.log('Lable: ' + labeledObj.label + 'Size: ' + labeledObj.size);
}

let myObj = {size:10, label: "Size 10 Object"};
printLabel(myObj);




interface CircleConfig{
    color?: string;
    radius?: number;
    diameter?: number;
}
function createCircle(config: CircleConfig): {color: string; radius:number; diameter:number}{
    let newCircle = {color:"white", radius:100, diameter: 1000}
    if (config.color){
        newCircle.color = config.color;
    }
    if (config.diameter){
        newCircle.diameter = 2*config.diameter;
    }
    return newCircle;
}

let circle = createCircle({color: "black", radius: 150, diameter:1});
console.log("diameter: "+circle.diameter);
