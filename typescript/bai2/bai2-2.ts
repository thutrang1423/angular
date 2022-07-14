function add(x,y){
    return x+y;
}

let myAdd = function (x,y){
    return x+y;
};

function Add(x: number, y: number): number{
    return x+y;
}

let MyAdd = function (x: number, y: number): number{
    return x+y;
}

function buildName(firstName: string, lastName?: string /*"Smith"*/){
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}
let result1 = buildName("Bob"); //works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined);//still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams","Sr.");// (error, too many parameters)
let result4 = buildName("Bob", "Adams")//ah, just right

// tham số còn lại
function BuildName (firstName: string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
let employeeName = BuildName("Joseph", "Samuel", "Lucas","MacKinzie")
