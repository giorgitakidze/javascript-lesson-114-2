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
    ary(mas);

    let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isloggedin: true
      }


      //ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

      function userName(){
        if(user.isloggedin==true){
            console.log(user.firstname+" "+user.lastname);
        }
        if (user.isloggedin==false) {
            console.log(false);
        }
    }
    userName();  

    //შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

    let aray=[12,32,54,2,67,45,23,2];
max=mas=>{
    let maxNums=mas[0];
   for (let index = 1; index < mas.length; index++) {
     if (mas[index]>maxNums){
         maxNums=mas[index]
     }
   }
   return maxNums;
};
console.log(max(aray));




