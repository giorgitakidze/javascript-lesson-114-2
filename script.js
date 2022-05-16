//1)შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს მხოლოდ დადებითი რიცხვების ჯამს:
2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;


function parametr (...n) {
    let nam=0;
    for(let x of n) {
        if (x>0) {
            nam+=x;
        }
    }
    return nam;
}

let g=parametr (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
//console. log(g);

 //2ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
10, 50, 6, 7, 8, 11, 6, 3, 9

let mas=[10, 50, 6, 7, 8, 11, 6, 3, 9];

let ary=function(array){
     let s=0;
     for(let x of array){
        s+=x;
     }
     console.log(g);
}
    ary(mas)

    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true
      }




