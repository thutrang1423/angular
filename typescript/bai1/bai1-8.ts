var arr = ["orange","mango","banana","sugar","tea"];
// 2 là vị trí bắt đầu, 0 là số phần tử xoá, water là phần tử cần thêm
var removed = arr.splice(2,0,"water");
console.log("After adding 1: "+arr);
console.log("removed is: "+removed);
removed = arr.splice(3,1);
console.log("After removing 1:" + arr);
console.log("removed is: "+removed);



