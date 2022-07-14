// thêm readonly trước thuộc tính sẽ khiến thuộc tính đó chỉ có thể thay đổi được một lần đầu tiên 
interface Point{
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 10, y:20};
// p1.x = 5; (error)