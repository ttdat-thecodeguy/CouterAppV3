
// run in ES6
//khả năng thoát ra khỏi hàm và vào lại

//vòng lặp vô tận không ảnh hưởng đến hàm vì tính năng chờ
function * helloGeneratorFunc() {
    //viết lần 1
    yield 2019; // trả về giá trị + trì hoãn việc thực thi
    //chạy lại
    return "hello world";
}

function * hello(){
    yield 'Hello';
    yield * helloGeneratorFunc(); // nhường quyền cho thằng khác
    yield 'You'
}

const res = helloGeneratorFunc() //iterator
console.log('result ' + res.next()) // print 2019 - done : false
console.log('result ' + res.next()) // print hello world - done: true   
